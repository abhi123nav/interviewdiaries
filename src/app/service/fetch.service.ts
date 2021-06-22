import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { User } from '../user';
import { environment } from 'src/environments/environment.prod';


@Injectable({
  providedIn: 'root'
})
export class FetchService {
  //baseUrl='http://localhost:8082/cnames';
  baseUrl='https://nitccivildiaries.herokuapp.com/';
  constructor(private http:HttpClient) { }
  public getData(){
    //return this.http.get("http://localhost:8082/cnames");
    return this.http.get(this.baseUrl+'cnames/');
  }
  public getDatabycname(name:any):Observable<any>{
    // return this.http.get("http://localhost:8082/cnames/"+cname);
    // return this.http.get("http://localhost:8082/cnames/Wipro");
    // return this.http.get<User[]>(`${this.baseUrl}/${cname}`);
   //this was working// return this.http.get<User>('http://localhost:8082/cnames/'+name);
    return this.http.get<User>(this.baseUrl+'cnames/'+name);
  }
}
