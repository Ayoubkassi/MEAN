import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-support-item',
  templateUrl: './support-item.component.html',
  styleUrls: ['./support-item.component.scss']
})
export class SupportItemComponent implements OnInit {

  @Input() support : any;

  constructor() { }

  ngOnInit(): void {
  }

}
