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
  serverName = 'TestServerInitially' ;
  isResetUserName = true ;
  isServerCreated = false ;
  isDisplayDetails = true ;
  userName = '' ;
  displayOrHideDetailsButton = 'Hide Details' ;
  servers = ['TestServer' , 'TestServer 2'] ;
  showDetails = false ;
  clicks = [] ;
  log = [] ;
  constructor() {
    setTimeout(() =>{
      this.allowNewServer = true ;
    },2000);
  }

  ngOnInit() {
  }

  onToggleDetails()
  {
    this.showDetails = !this.showDetails ;
    if (this.showDetails === false)
    {
      this.displayOrHideDetailsButton = 'Display Details' ;
    }
    else
    {
      this.displayOrHideDetailsButton = 'Hide Details' ;
    }
    this.log.push(this.log.length + 1 ) ;

  }

  onCreateServer() {
    if ( this.serverName !== '')
    {
      this.isServerCreated = true ;
    }
    else
    {
      this.isServerCreated = false ;
    }
    this.servers.push(this.serverName) ;
    this.serverCreation = 'Server was created and name is ' + this.serverName ;
  }

  onServerNameChanged(event:any) {
    if (this.serverName === '')
    {
      this.isServerCreated = false ;
    }
  }

  onUserNameChanged( event:any)
  {
    var stringValue = (<HTMLInputElement>event.target).value ;
    if (stringValue !== '')
    {
      this.isResetUserName = false ;
    }
    else
    {
      this.isResetUserName = true ;
    }
    console.log(event) ;
  }

  onClickDisplayButton()
  {
    this.isDisplayDetails = !this.isDisplayDetails ;
    this.clicks.push(Date.now()) ;
  }

  onResetUserName()
  {
    this.userName = '';
  }

}
