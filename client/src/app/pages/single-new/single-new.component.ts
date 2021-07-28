import { Component, OnInit } from '@angular/core';
import { News  } from '../../News';
import { NewsService } from 'src/app/services/news.service';
import {  Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-single-new',
  templateUrl: './single-new.component.html',
  styleUrls: ['./single-new.component.scss']
})
export class SingleNewComponent implements OnInit {

/*  News = {
    content : 'Hey and welcome',
    title : 'Formation AutoDesk',
    image : 'back3.jpg'
  };
  */

  News : any;
  id : string = "";

  constructor(private newsService : NewsService,
            private router : Router,
            private route: ActivatedRoute) {
              this.route.params.subscribe( params => this.id = params.id)
            }

  ngOnInit(): void {
    this.newsService.getSingleNews(this.id).subscribe((news)=>{
      this.News = news;
      console.log(this.News);
    })
  }

}
