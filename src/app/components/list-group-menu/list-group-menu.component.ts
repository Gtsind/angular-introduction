import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-list-group-menu',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './list-group-menu.component.html',
  styleUrl: './list-group-menu.component.css'
})
export class ListGroupMenuComponent {

  menu = [
    { text: 'Event Bind Example', linkName: 'event-bind-example'},
    { text: 'Component Input Example', linkName: 'component-input-example'},
    { text: 'Component Output Example', linkName: 'output-example'},
    { text: '@For Directive Example', linkName: 'for-directive-example'},
    { text: 'Simple Datatable Example', linkName: 'simple-datatable-example'},
    { text: 'User Registration', linkName: 'user-registration' },
    { text: 'User login', linkName: 'login'},
    { text: 'Welcome', linkName: 'welcome'}
  ]
}
