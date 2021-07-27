import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { News  } from '../../News';
import {  Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-main-actualite',
  templateUrl: './main-actualite.component.html',
  styleUrls: ['./main-actualite.component.scss']
})
export class MainActualiteComponent implements OnInit {

  News : any;
  constructor(private newsService : NewsService,
              private router : Router) { }

  ngOnInit(): void {
    this.newsService.getNews().subscribe((news)=>{
      this.News = news;
    });
  }


  deleteNews(id : string){
    if(confirm("Are u sure u wanna delete this news ?")) {
    this.newsService.deleteNews(id).subscribe();
    location.reload();



  }
  }

}
