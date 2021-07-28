import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
//import { tokenNotExpired } from 'angular2-jwt';
import { User } from '../User';


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

  private apiUrl =  'api/products';

  registerUser(user : User) : Observable<User>  {
    const url = `${this.apiUrl}/register`;
    return this.http.post<User>(url,user,httpOptions);
  }



  getProfile(): Observable<any> {
  this.loadToken();
  let headers = {
    headers : new HttpHeaders({
      'Content-Type' : 'application/json',
      'Authorization': this.authToken
    })
  }
  const url = `${this.apiUrl}/profile`;
  return this.http.get<any>(url,headers);
}

  authenticateUser(user : User) : Observable<any> {
    const url = `${this.apiUrl}/authenticate`;
    return this.http.post<any>(url,user,httpOptions);
    //return this.http.post<User>(`${this.apiUrl}/authenticate`,user,httpOptions);
  }

  loadToken() {
    const token = localStorage.getItem('id_token');
    this.authToken = token;
  }

  storeUserData(token : any , user : any){
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
