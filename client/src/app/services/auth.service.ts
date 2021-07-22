import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
//import { tokenNotExpired } from 'angular2-jwt';
import { User } from '../../User';


const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authToken: any;
  user: any;

  constructor(private http:HttpClient) { }

  private apiUrl =  'http://localhost:5000/api/products';

  registerUser(user : User)Observable<User>  {
    return this.http.post<User>(`${this.apiUrl}/register`,user,httpOptions);
  }

  authenticateUser(user : User)Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/register`,user,httpOptions);
    //return this.http.post<User>(`${this.apiUrl}/authenticate`,user,httpOptions);
  }

  storeUserData(token , user){
    localStorage.setItem('id_token',token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  logout(){
    this.authToken = null ;
    this.user = null ;
    localStorage.clear();
  }


}
