import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product  } from '../../Product';

@Component({
  selector: 'app-main-product',
  templateUrl: './main-product.component.html',
  styleUrls: ['./main-product.component.scss']
})
export class MainProductComponent implements OnInit {

  Products : any;
  constructor(private productService : ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products)=>{
      this.Products = products;
    });
  }

}
