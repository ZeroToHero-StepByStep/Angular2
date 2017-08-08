import {Component} from '@angular/core' ;
@Component({
  selector: 'app-server' ,
  templateUrl : './server.component.html'
})
//so we can use it outside
export class ServerComponent
 {
    serverId = 10 ;
    serverStatus = 'offline' ;
    constructor() {
      this.serverStatus = Math.random()> 0.5 ? 'online' : 'offline' ;
    }
    getServerStatus(){
      return this.serverStatus ;
    }

    getColor() {
      if (this.serverStatus=== 'online')
      {
        return 'green' ;
      }
      else {
        return 'red' ;
      }
    }

 }



