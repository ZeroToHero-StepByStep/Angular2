import { Component, OnInit } from '@angular/core';
import DateTimeFormat = Intl.DateTimeFormat;

@Component({
  selector: 'app-click',
  templateUrl: './click.component.html',
  styleUrls: ['./click.component.css'],
  styles: [`
    .after5thColor 
    {  
      color : white; 
    }
  `]
})
export class ClickComponent implements OnInit {
  static counter = 0 ;
  timeStamp = Date.now();
  id = 0 ;
  constructor(){
    this.timeStamp = Date.now();
    // this.timeStamp = Intl.DateTimeFormat ;
    this.id = ClickComponent.counter++;
   // this.counter = this.counter + 1 ;
  }

  getBackgroundColr() {
    if ( this.id >= 5 )
    {
      return 'blue' ;
    }
  }

  ngOnInit() {
  }

}
