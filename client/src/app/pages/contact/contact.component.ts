import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  lat = 	31.791702;
  lng = -7.092620;

  constructor() { }

  ngOnInit(): void {
  }

}
