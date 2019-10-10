import { Component } from '@angular/core';
import { Message } from './message';

import { MailService } from '../../services/mail.service'

@Component({
    templateUrl: 'contact.component.html',
    styleUrls: ['./contact.component.css']
})
export class ContactComponent {
    model = new Message('', '', '');

    constructor(
        private mailService: MailService
    ) {}

    get diagnostic() { return JSON.stringify(this.model); }

    submit() {
        console.log(JSON.stringify(this.model));
        this.mailService.sendMail(
            this.model.email,
            this.model.subject,
            this.model.text
        ).subscribe({
            next: event => console.log(`This is the next event in the observable ${event}`),
            error: err => console.error(`Oops... ${err}`),
            complete: () => console.log('Completed!')
        });
    }
}
