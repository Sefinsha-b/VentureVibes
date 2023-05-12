import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http:HttpClient) { }

  url:string =  'http://localhost:3000';

  postdata(data:any){
    return this.http.post( this.url + '/dashboard', data);
  }

  postSignupData(data:any){
    return this.http.post( this.url + '/signup', data);
    
  }
}
