import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from '../../User';
import {  Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  username : string = "";
  password : string = "";

  constructor(private authService:AuthService,
               private router: Router) { }

  ngOnInit(): void {
  }

  Login(){

    if(this.username == ""){
      alert("Please Enter Your Username");
      return;
    }
    const user = {
      username : this.username,
      password : this.password,
    }

    this.authService.authenticateUser(user).subscribe((data)=> {
      if(data.success){
        this.authService.storeUserData(data.token,data.user);
        this.router.navigate(['']);
      }
      else{
        alert(data.msg);
        this.router.navigate(['admin']);
      }
    });

    this.username= "";
    this.password = "";
  }


  onLogout(){
    this.authService.logout();
    this.router.navigate(['admin']);
    return false;
  }

  }
