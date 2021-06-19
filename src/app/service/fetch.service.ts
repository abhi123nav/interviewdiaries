import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { User } from '../user';


@Injectable({
  providedIn: 'root'
})
export class FetchService {
  baseUrl='http://localhost:8082/cnames';
  constructor(private http:HttpClient) { }
  public getData(){
    return this.http.get("http://localhost:8082/cnames");
  }
  public getDatabycname(name:any):Observable<any>{
    // return this.http.get("http://localhost:8082/cnames/"+cname);
    // return this.http.get("http://localhost:8082/cnames/Wipro");
    // return this.http.get<User[]>(`${this.baseUrl}/${cname}`);
    return this.http.get<User>('http://localhost:8082/cnames/'+name);
  }
}
