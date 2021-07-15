import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  Name : string = "" ;
  Email : string = "";
  Subject : string = "";  
  text : string = "";



  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.Name){
      alert("Please Enter Your Name");
      return;
    }
    const message = {
      name : this.Name,
      email : this.Email,
      subject : this.Subject,
      text : this.text
    }
    console.log(message);

    this.text= "";
    this.Name = "";
    this.Email = "";
    this.Subject = "";
  } 

}
