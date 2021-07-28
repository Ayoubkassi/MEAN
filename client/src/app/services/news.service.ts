import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { News } from '../News';


const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}



@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http:HttpClient) { }

  private apiUrl =  'api/news';

  getNews() : Observable<News[]> {
    return this.http.get<News[]>(this.apiUrl);
  }

  addNews(news : News) : Observable<News>{
    return this.http.post<News>(this.apiUrl, news,httpOptions);
  }

  getSingleNews(id : string) : Observable<News>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<News>(url);
  }

  updateNews(id : string , news : News) : Observable<News>{
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<News>(url,news,httpOptions);
  }


  deleteNews(id : string){
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }

}
