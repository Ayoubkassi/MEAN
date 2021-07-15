import { Component, OnInit, Input } from '@angular/core';
import { Service } from '../../Service'

@Component({
  selector: 'app-service-item',
  templateUrl: './service-item.component.html',
  styleUrls: ['./service-item.component.scss']
})
export class ServiceItemComponent implements OnInit {

  @Input() service : any ;

  constructor() { }

  ngOnInit(): void {
  }

}
