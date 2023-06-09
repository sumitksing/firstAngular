import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowUsers: boolean = false;
  serverStatus: string = 'No server is added.'
  serverName: string = 'TestServer'
  serverCreated: boolean = false
  servers: string[] = ['sever_leap', 'test_server', 'test_server2']
  showPassword: boolean = false
  clicks: any[] = []
  clickCount: number = 0

  constructor() {
    setTimeout(() => {
      this.allowUsers = true;
    }, 2000)
  }

  ngOnInit() {

  }

  onAddServer(event: Event) {
    this.serverCreated = true
    this.servers.push(this.serverName)
    this.serverStatus = 'A server has been added!! And the name of server is ' + this.serverName;
    // console.log(event)
  }

  onUpdateServer(event: Event) {
    // console.log(event)
    this.serverName = (<HTMLInputElement>event.target).value
  }

  onDisplayDetails(event: Event) {
    this.clickCount++
    this.clicks.push(new Date)
    this.showPassword = !this.showPassword
  }

  getColor(click) {
    return click > 4 ? 'blue': ''
  }
}
