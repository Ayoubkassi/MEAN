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
    if(!this.Name){
      alert("Please Enter Product Name");
      return;
    }
    if(!this.Price){
      alert("Please Enter Product Price");
      return;
    }
    const product = {
      name : this.Name,
      price : this.Price,
      image : this.Image
    }

  /*  this.subjectService.addSubject(message).subscribe((subject)=> {
      console.log(subject);
    });*/

    this.Price= "";
    this.Name = "";
    this.Image = "";
    }


  onFileSelected(event : any){
    this.Image= event.target.files[0].name;
    console.log(this.Image);
  }






}
