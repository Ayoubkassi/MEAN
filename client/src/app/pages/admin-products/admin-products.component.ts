import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import {  Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.scss']
})
export class AdminProductsComponent implements OnInit {


  constructor(private authService:AuthService,
               private router: Router){ }

  ngOnInit(): void {

  }

  onClick(){
    this.authService.logout();
    this.router.navigate(['/admin']);
  }

}
