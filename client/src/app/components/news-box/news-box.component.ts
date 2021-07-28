import { Component, OnInit , Input } from '@angular/core';
import { News  } from '../../News';
import { NewsService } from 'src/app/services/news.service';
import {  Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-news-box',
  templateUrl: './news-box.component.html',
  styleUrls: ['./news-box.component.scss']
})
export class NewsBoxComponent implements OnInit {

  @Input() news : any;


  constructor() { }

  ngOnInit(): void {
  }

}
