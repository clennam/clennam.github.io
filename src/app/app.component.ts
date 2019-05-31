import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Coming soon!';
  index: number = 0;

  statuses: Array<string> = [
    'Coming soon!',
    'Rolling for Initiative...',
    'Sipping tea..',
    'Driving at ninety down those country lanes...',
    'Attaining final form...',
    'Where we\'re going, we don\'t need roads!',
    'I\'m Mister Meeseeks, look at me!'
  ];

  ngOnInit() {
    this.statusLoop();
  }

  statusLoop() {
    setTimeout(() => {
      this.title = this.statuses[this.index];
      this.index++;
      console.log(this.index);
      if (this.index > (this.statuses.length - 1)) {
        this.index = 0;
      }
      this.statusLoop();
    }, 3000);
  }

}
