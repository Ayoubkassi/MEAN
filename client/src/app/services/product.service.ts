import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}



@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }

  private apiUrl =  'http://localhost:5000/api/products';

  getProducts() : Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
