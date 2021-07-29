import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { News  } from '../../News';
import {  Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-main-editnews',
  templateUrl: './main-editnews.component.html',
  styleUrls: ['./main-editnews.component.scss']
})
export class MainEditnewsComponent implements OnInit {

  News : any;
  id : string = "";

  Title : string = "" ;
  Content : string = "";
  Image : string = "";

  constructor(private authService:AuthService,
              private newsService : NewsService,
            private router : Router,
            private route: ActivatedRoute) {
              this.route.params.subscribe( params => this.id = params.id )
            }

  ngOnInit(): void {
    this.newsService.getSingleNews(this.id).subscribe((news)=>{
      console.log(news);

      this.News = news;
      this.Title = this.News.title;
      this.Content = this.News.content;
      this.Image = this.News.image;
    })
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

   this.newsService.updateNews(this.id,news).subscribe((news)=> {
      console.log(news);
      this.router.navigate(['main-actualite']);
    });

    this.Content= "";
    this.Title  = "";
    this.Image  = "";
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
