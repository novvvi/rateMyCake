import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cakes: any;
  newCake: any;
  newComment: any[];
  appShowInfo: any;

  constructor(private _httpService: HttpService){}

  ngOnInit(){
    this.Cakes()
    this.newCake = {name: "", url: ""};
    this.newComment = []
  }

  createComment(n){
    for (let i = 0; i < n; i++){
      this.newComment.push({rate: 1, comment: ""})
      console.log(this.newComment)
    }
  }
  
  Cakes(){
    let obs = this._httpService.getCakes();
    obs.subscribe(data => {
      this.cakes = data;
      console.log(this.cakes.length);
      this.createComment(this.cakes.length);
    });
  };


  createCakes(){
    let obs = this._httpService.postCakes(this.newCake);
    obs.subscribe(data => {
      console.log("send", data);
    });
    this.Cakes()
  }

  newComments(id, index){
    console.log(this.newComment[index])
    console.log(id)
    let obs = this._httpService.postComments(this.newComment[index], id);
    obs.subscribe(data => {
      console.log("newComments", data);
    });
  }

  toggleInfo(index){
    this.appShowInfo = this.cakes[index];
    console.log(this.appShowInfo);
  }
};
