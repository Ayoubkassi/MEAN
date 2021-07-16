import { Component, OnInit } from '@angular/core';
import { SubjectService } from 'src/app/services/subject.service';
import { Subject } from '../../Subject';


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
  subjects : Subject[] = [];
  



  constructor(private subjectService : SubjectService) { }

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
      sujet : this.Subject,
      text : this.text
    }
    
    this.subjectService.addSubject(message).subscribe((subject)=> {
      console.log(subject);
    });

    this.text= "";
    this.Name = "";
    this.Email = "";
    this.Subject = "";
  } 

}
