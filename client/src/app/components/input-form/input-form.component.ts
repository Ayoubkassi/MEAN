import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss']
})
export class InputFormComponent implements OnInit {

  @Input() type : string ="text";
  @Input() label : string = "";


  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
    // changes.prop contains the old and the new value...
  }

}
