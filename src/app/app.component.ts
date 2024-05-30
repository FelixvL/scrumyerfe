import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'scrum-demo';
  voornaam = 'fred';

  verandernaam(){
    console.log("naam wordt veranderd");
    this.voornaam = 'joost'
  }
}
