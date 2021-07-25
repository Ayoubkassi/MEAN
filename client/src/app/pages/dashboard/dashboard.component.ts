import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import {  Router, ActivatedRoute, ParamMap } from '@angular/router';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  user : any;

  constructor(private authService:AuthService,
               private router: Router) { }

  ngOnInit(): void {
    this.authService.getProfile().subscribe(profile => {
      this.user = profile.user;
      console.log('test');
      console.log(profile);
    },
    err => {
      console.log(err);
      return false;
    }
  );
  }

  onClick(){
    this.authService.logout();
    this.router.navigate(['']);
  }


}
