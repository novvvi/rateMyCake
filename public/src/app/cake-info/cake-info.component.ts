import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cake-info',
  templateUrl: './cake-info.component.html',
  styleUrls: ['./cake-info.component.css']
})
export class CakeInfoComponent implements OnInit {
  @Input() showInfo;
  cakeAvg: number;

  constructor() { }

  ngOnInit() {
    this.rateAvg();
  }

  rateAvg() {
    console.log(this.showInfo.comments);
    let list = this.showInfo.comments;
    let sum = 0;
    for (let i = 0; i < list.length; i++){
      sum += list[i].rate;
    };
    
    this.cakeAvg = sum / list.length;
    console.log("this is average", this.cakeAvg)
  };
  
}
