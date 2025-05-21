import { Routes } from '@angular/router';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ForDirectiveExampleComponent } from './components/for-directive-example/for-directive-example.component';
import { EventBindExampleComponent } from './components/event-bind-example/event-bind-example.component';
import { ComponentInputExampleComponent } from './components/component-input-example/component-input-example.component';

export const routes: Routes = [
  { path: 'for-directive-example', component: ForDirectiveExampleComponent},
  { path: 'component-input-example', component: ComponentInputExampleComponent},
  { path: 'user-registration-example', component: UserRegistrationComponent },
  { path: 'event-bind-example', component: EventBindExampleComponent},
  { path: 'user-login', component: UserLoginComponent},
  { path: 'welcome', component: WelcomeComponent}
];
