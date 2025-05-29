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
import { ReactiveFormExampleComponent } from './components/reactive-form-example/reactive-form-example.component';
import { HttpClientExampleComponent } from './components/http-client-example/http-client-example.component';
import { authGuard } from './shared/guards/auth.guard';
import { adminRoleGuard } from './shared/guards/admin-role.guard';

export const routes: Routes = [
  { path: 'for-directive-example', component: ForDirectiveExampleComponent},
  { path: 'component-input-example', component: ComponentInputExampleComponent},
  { path: 'output-example', component: OutputExampleComponent},
  { path: 'simple-datatable-example', component: SimpleDatatableExampleComponent},
  { path: 'template-driven-form-example', component: TemplateDrivenFormExampleComponent},
  { path: 'reactive-form-example', component: ReactiveFormExampleComponent},
  { 
    path: 'user-registration',
    component: UserRegistrationComponent,
    canActivate:[authGuard, adminRoleGuard] 
  },
  { path: 'event-bind-example', component: EventBindExampleComponent},
  { path: 'http-client-example', component: HttpClientExampleComponent},
  { path: 'login', component: UserLoginComponent},
  { path: 'welcome', component: WelcomeComponent},
  { path: '', redirectTo: '/welcome', pathMatch: 'full'}
];
