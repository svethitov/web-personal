import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AcademicComponent } from './components/academic/academic.component';
import { PersonalComponent } from './components/personal/personal.component';
import { ContactComponent } from './components/contact/contact.component';
import { WorkComponent } from './components/work/work.component';
import { PageNotFoundComponent } from './components/page_not_found/page-not-found.component';
import { EasterEggComponent } from './components/easter_egg/easter-egg.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'academic', component: AcademicComponent },
  { path: 'personal', component: PersonalComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'work', component: WorkComponent },
  { path: 'egg', component: EasterEggComponent },
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {
      anchorScrolling: 'enabled'
    }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
