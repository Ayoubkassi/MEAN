import { Component, OnInit } from '@angular/core';
import { SERVICES } from '../../Services'
import { Service } from '../../Service'

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  services : Service[] = SERVICES;


  constructor() { }

  ngOnInit(): void {
  }

}
