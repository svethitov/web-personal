import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { environment } from '../../environments/environment';

@Injectable()
export class MailService {

    constructor(
        private http: HttpClient
    ) {}

    sendMail(sender: string, subject: string, text: string): Observable<boolean> {
        const body = new HttpParams()
            .set('email', sender)
            .set('subject', subject)
            .set('message', text);

        const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });

        return this.http.post(environment.mailUrl, body.toString(), { headers, observe: 'response' })
            .pipe(
                map((res: HttpResponse<Object>) => res.ok),
                catchError((err: any) => of(false))
            )
    }
}
