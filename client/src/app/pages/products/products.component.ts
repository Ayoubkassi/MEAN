import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product  } from '../../Product';
import {  Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  Products : any;
  constructor(private productService : ProductService,
              private router : Router) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products)=>{
      this.Products = products;
    });
  }

}
