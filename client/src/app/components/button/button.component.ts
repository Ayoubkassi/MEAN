import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() text : any = "";
  @Input() imgUrl : any = "";
  @Input() bgColor : string ="black";
  @Input() color : string ="white";
  @Input() borde : string ="0px solid black";

  constructor() { }

  ngOnInit(): void {
  }

}
