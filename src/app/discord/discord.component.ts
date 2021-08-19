import { Component } from '@angular/core';

@Component({
    selector: 'app-discord',
    templateUrl: './discord.component.html',
})
export class DiscordComponent {
    constructor() {
        window.location.href = 'https://discord.gg/fs4zjKcyTx';
    }
}
