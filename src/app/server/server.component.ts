import { style } from "@angular/animations";
import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
    .online{
        color: white;
    }
    `]
})
export class ServerComponent {
    serverId: number = 10;
    serverStatus: String = 'Offline';

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'Online' : 'Offline'
    }

    getServerStatus(): String {
        return this.serverStatus;
    }
    getColor() {
        return this.serverStatus === 'Online' ? 'green' : 'red'
    }
}
