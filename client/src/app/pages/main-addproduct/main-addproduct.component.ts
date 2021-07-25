import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-addproduct',
  templateUrl: './main-addproduct.component.html',
  styleUrls: ['./main-addproduct.component.scss']
})
export class MainAddproductComponent implements OnInit {

  Name : string = "" ;
  Price : string = "";
  Image : string = "";

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log("Add");
    console.log(Image);
  }






}
