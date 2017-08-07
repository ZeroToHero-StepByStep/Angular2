import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  selector: '.app-servers',
  // template: '<app-server></app-server><app-server></app-server>',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
  // styles: [`h3{ color:dodgerblue ;  }`]
})
export class ServersComponent implements OnInit {
  allowNewServer = false ;
  serverCreation = 'No server was created' ;
  serverName = '' ;
  constructor() {
    setTimeout(() =>{
      this.allowNewServer = true ;
    },2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreation = 'Server was created' ;
  }

  onUpdateServerName( event :any) {
    console.log(event) ;
    this.serverName = (<HTMLInputElement>event.target).value ;
  }

}
