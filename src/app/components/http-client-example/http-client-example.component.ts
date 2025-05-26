import { Component, inject, OnInit } from '@angular/core';
import { JokesService } from 'src/app/shared/services/jokes.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-http-client-example',
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './http-client-example.component.html',
  styleUrl: './http-client-example.component.css'
})
export class HttpClientExampleComponent implements OnInit {
  jokesService = inject(JokesService);
  dadJoke: string = '';
  chuckNorrisJoke: string = '';

  ngOnInit(): void {
    this.refreshChuckNorrisJoke();
    this.refreshDadJoke();

    // this.jokesService.getDadJokes().subscribe((data) => {
    //   console.log("Dad joke", data.joke);
    // })

    // this.jokesService.getChuckNorrisJoke().subscribe((data) => {
    //   console.log("Chuch Norris Joke", data.value);
    // })
  }

  refreshDadJoke() {
    this.jokesService.getDadJokes()
      .subscribe((data) => {
        this.dadJoke = data.joke;
      })
  }

  refreshChuckNorrisJoke() {
    this.jokesService.getChuckNorrisJoke()
      .subscribe((data) => {
        this.chuckNorrisJoke = data.value;
      })
  }
}
