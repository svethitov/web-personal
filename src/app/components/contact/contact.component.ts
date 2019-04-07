import { Component } from '@angular/core';
import { Message } from './message';

@Component({
    templateUrl: 'contact.component.html',
    styleUrls: ['./contact.component.css']
})
export class ContactComponent {
    model = new Message('', '', '');

    get diagnostic() { return JSON.stringify(this.model); }

    submit() {
        console.log(JSON.stringify(this.model));
    }
}
