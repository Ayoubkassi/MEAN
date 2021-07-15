import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  bcImg : string = '../assets/back2.webp';

  constructor() { }

  ngOnInit(): void {
  }

}
