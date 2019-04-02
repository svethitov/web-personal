import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AgmCoreModule } from '@agm/core';

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
      apiKey: 'AIzaSyCMshlUJSG_WToY9mY66kj679bD4Aw789g'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
