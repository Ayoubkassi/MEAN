import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../Product';


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

  private apiUrl =  'api/products';

  getProducts() : Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  addProduct(product : Product) : Observable<Product>{
    return this.http.post<Product>(this.apiUrl, product,httpOptions);
  }

  getSingleProduct(id : string) : Observable<Product>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Product>(url);
  }

  updateProduct(id : string , product : Product) : Observable<Product>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Product>(url,product,httpOptions);
  }

  deleteProduct(id : string){
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }
}
