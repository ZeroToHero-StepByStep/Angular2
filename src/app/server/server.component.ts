import{Component} from '@angular/core' ;
@Component({
  selector: 'app-server' ,
  templateUrl : './server.component.html'
})
//so we can use it outside
export class ServerComponent
 {
    serverId = 10 ;
    serverStatus = 'offline' ;

    getServerStatus(){
      return this.serverStatus ;
    }
 }



