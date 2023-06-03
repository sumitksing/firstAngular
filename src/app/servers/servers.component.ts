import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowUsers: boolean = false;
  serverStatus: string = 'No server is added.'
  serverName: string = ''

  constructor() {
    setTimeout(() => {
      this.allowUsers = true;
    }, 2000)
  }

  ngOnInit() {

  }

  onAddServer(event: Event) {
    this.serverStatus = 'A server has been added';
    // console.log(event)
  }

  onUpdateServer(event: Event) {
    // console.log(event)
    this.serverName = (<HTMLInputElement>event.target).value
  }
}
