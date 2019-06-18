import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
  }
  getCakes(){
    return this._http.get("/cakes");
  };

  postCakes(n){
    return this._http.post("/cakes", n);
  };

  postComments(data, id) {
    console.log(data);
    return this._http.post(`/cakes/comment/${id}`, data)
  };
}
