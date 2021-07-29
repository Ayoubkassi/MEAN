import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product  } from '../../Product';
import {  Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-main-product',
  templateUrl: './main-product.component.html',
  styleUrls: ['./main-product.component.scss']
})
export class MainProductComponent implements OnInit {

  Products : any;
  constructor(private authService:AuthService,
            private productService : ProductService,
              private router : Router) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((products)=>{
      this.Products = products;
    });
  }


  deleteProduct(id : string){
    if(confirm("Are u sure u wanna delete that product ?")) {
    this.productService.deleteProduct(id).subscribe();
    location.reload();



  }
  }

  onClick(){
    this.authService.logout();
    this.router.navigate(['/admin']);
  }

}
