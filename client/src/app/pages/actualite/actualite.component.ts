import { Component, OnInit } from '@angular/core';
import { NewsService } from 'src/app/services/news.service';
import { News  } from '../../News';
import {  Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-actualite',
  templateUrl: './actualite.component.html',
  styleUrls: ['./actualite.component.scss']
})
export class ActualiteComponent implements OnInit {

  News : any;
  constructor(private NewsService : NewsService,
            private router : Router,
            private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.NewsService.getNews().subscribe((news)=>{
      this.News = news;
    });
  }

}
