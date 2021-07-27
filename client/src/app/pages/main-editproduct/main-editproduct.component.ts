import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product  } from '../../Product';
import {  Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-main-editproduct',
  templateUrl: './main-editproduct.component.html',
  styleUrls: ['./main-editproduct.component.scss']
})
export class MainEditproductComponent implements OnInit {

  Product : any;
  id : string = "";

  Name : string = "" ;
  Price : string = "";
  Image : string = "";

  constructor(private productService : ProductService,
            private router : Router,
            private route: ActivatedRoute) {
              this.route.params.subscribe( params => this.id = params.id_)
            }

  ngOnInit(): void {
    this.productService.getSingleProduct(this.id).subscribe((product)=>{
      this.Product = product;
      this.Name = this.Product.name;
      this.Price = this.Product.price;
      this.Image = this.Product.image;
    })
  }

  onSubmit(){
    if(!this.Name){
      alert("Please Enter Product Name");
      return;
    }
  /*  if(!this.Price){
      alert("Please Enter Product Price");
      return;
    }*/
    const product = {
      name : this.Name,
      price : this.Price,
      image : this.Image
    }

   this.productService.updateProduct(this.id,product).subscribe((product)=> {
      console.log(product);
      this.router.navigate(['main-products']);
    });

    this.Price= "";
    this.Name = "";
    this.Image = "";
    }


  onFileSelected(event : any){
    this.Image= event.target.files[0].name;
    console.log(this.Image);
  }



}
