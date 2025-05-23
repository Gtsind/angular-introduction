import { Routes } from '@angular/router';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ForDirectiveExampleComponent } from './components/for-directive-example/for-directive-example.component';
import { EventBindExampleComponent } from './components/event-bind-example/event-bind-example.component';
import { ComponentInputExampleComponent } from './components/component-input-example/component-input-example.component';
import { SimpleDatatableExampleComponent } from './components/simple-datatable-example/simple-datatable-example.component';
import { OutputExampleComponent } from './components/output-example/output-example.component';
import { TemplateDrivenFormExampleComponent } from './components/template-driven-form-example/template-driven-form-example.component';

export const routes: Routes = [
  { path: 'for-directive-example', component: ForDirectiveExampleComponent},
  { path: 'component-input-example', component: ComponentInputExampleComponent},
  { path: 'output-example', component: OutputExampleComponent},
  { path: 'simple-datatable-example', component: SimpleDatatableExampleComponent},
  { path: 'template-driven-form-example', component: TemplateDrivenFormExampleComponent},
  { path: 'user-registration', component: UserRegistrationComponent },
  { path: 'event-bind-example', component: EventBindExampleComponent},
  { path: 'login', component: UserLoginComponent},
  { path: 'welcome', component: WelcomeComponent},
  { path: '', redirectTo: '/welcome', pathMatch: 'full'}
];
