import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AgmCoreModule } from '@agm/core';
import { NgbCollapseModule, NgbAlertModule, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AcademicComponent } from './components/academic/academic.component';
import { PersonalComponent } from './components/personal/personal.component';
import { ContactComponent } from './components/contact/contact.component';
import { WorkComponent } from './components/work/work.component';
import { PageNotFoundComponent } from './components/page_not_found/page-not-found.component';
import { EasterEggComponent } from './components/easter_egg/easter-egg.component';

import { MailService } from './services/mail.service';

import { secrets } from '../assets/secrets';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    WelcomeComponent,
    AcademicComponent,
    PersonalComponent,
    ContactComponent,
    WorkComponent,
    PageNotFoundComponent,
    EasterEggComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: secrets.google.api_key
    }),
    FormsModule,
    HttpClientModule,
    NgbCollapseModule,
    NgbAlertModule,
    NgbCarouselModule
  ],
  providers: [
    MailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
