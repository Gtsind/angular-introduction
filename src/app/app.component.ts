import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListGroupMenuComponent } from "./components/list-group-menu/list-group-menu.component";
import { NavbarComponent } from './components/navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListGroupMenuComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
