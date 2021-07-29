import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { News  } from '../../News';
import {  Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-main-addnews',
  templateUrl: './main-addnews.component.html',
  styleUrls: ['./main-addnews.component.scss']
})
export class MainAddnewsComponent implements OnInit {

  Title : string = "" ;
  Content : string = "";
  Image : string = "";

  constructor(private authService:AuthService,
              private newsService : NewsService,
            private router : Router) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if(!this.Title){
      alert("Please Enter News Title");
      return;
    }
    if(!this.Content){
      alert("Please Enter News Content");
      return;
    }
    const news = {
      title : this.Title,
      content : this.Content,
      image : this.Image
    }

   this.newsService.addNews(news).subscribe((news)=> {
      console.log(news);
      this.router.navigate(['main-actualite']);
    });

    this.Title= "";
    this.Content = "";
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
