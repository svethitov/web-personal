import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { environment } from '../../environments/environment';

import { Message } from '../common/message';

@Injectable()
export class MailService {

    constructor(
        private http: HttpClient
    ) {}

    sendMail(message: Message): Observable<boolean> {
        const body = new HttpParams()
            .set('email', message.email)
            .set('subject', message.subject)
            .set('message', message.text);

        const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });

        return this.http.post(environment.mailUrl, body.toString(), { headers, observe: 'response' })
            .pipe(
                map((res: HttpResponse<Object>) => res.ok),
                catchError((err: any) => of(false))
            )
    }
}
