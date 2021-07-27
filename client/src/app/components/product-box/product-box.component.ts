import { Component, OnInit , Input} from '@angular/core';
import { Product  } from '../../Product';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.scss']
})
export class ProductBoxComponent implements OnInit {

  @Input() product : any;

  constructor() { }

  ngOnInit(): void {
  }

}
