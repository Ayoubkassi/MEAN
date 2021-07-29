import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product  } from '../../Product';
import {  Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';




@Component({
  selector: 'app-main-addproduct',
  templateUrl: './main-addproduct.component.html',
  styleUrls: ['./main-addproduct.component.scss']
})
export class MainAddproductComponent implements OnInit {

  Name : string = "" ;
  Price : string = "";
  Image : string = "";

  constructor(private authService:AuthService,
            private productService : ProductService,
            private router : Router) { }

  ngOnInit(): void {
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

   this.productService.addProduct(product).subscribe((product)=> {
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

  onClick(){
    this.authService.logout();
    this.router.navigate(['/admin']);
  }






}
