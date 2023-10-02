import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http:HttpClient) { }

  url:string =  'http://localhost:3000';

//  dashboard 
  postdata(data:any){
    return this.http.post( this.url + '/dashboard', data);
  }

  // signup
  postSignupData(data:any){
    return this.http.post( this.url + '/signup', data);
    
  }

  //form
  postFormData(data:any){
    return this.http.post( this.url + '/forms', data);
  }

  //form2 and flight booking
  postForm2Data(data:any){
    return this.http.post(this. url + '/forms2', data);
  }
}
