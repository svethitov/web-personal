import { Component } from '@angular/core';
import { Message } from '../../common/message';
import { NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';

import { MailService } from '../../services/mail.service'
import { TouchSequence } from 'selenium-webdriver';

@Component({
    templateUrl: 'contact.component.html',
    styleUrls: ['./contact.component.css']
})
export class ContactComponent {
    model = new Message('', '', '');
    userMessage: string = null;
    loading = false;
    lat = 42.727817;
    lng = 23.301283;

    constructor(
        private mailService: MailService,
        private ngbAlertConfig: NgbAlertConfig
    ) {
        ngbAlertConfig.dismissible = false;
    }

    submit() {
        this.loading = true;
        this.mailService.sendMail(this.model).subscribe({
            next: (event) => {
                this.loading = false;
                this.model = new Message('', '', '');
                this.ngbAlertConfig.type = 'success';
                this.userMessage = 'Thank you for you message. I will reply as soon as possible.'
            },
            error: (err) => {
                this.loading = false;
                this.userMessage = 'Oops there was an error. Check for details in the browser console'
                this.ngbAlertConfig.type = 'danger';
                console.error(`Oops... ${err}`)
            }
        });
    }
}
