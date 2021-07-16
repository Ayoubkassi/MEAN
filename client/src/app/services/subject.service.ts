import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject } from '../Subject';

const httpOptions = {
  headers : new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  private apiUrl =  'http://localhost:5000/api/subjects'

  constructor(private http:HttpClient) {}

  addSubject(subject : Subject): Observable<Subject>{
    return this.http.post<Subject>(this.apiUrl,subject,httpOptions);
  }


}
