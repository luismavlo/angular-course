import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public title: string = 'semaforo';
  public count: number = 0;

  increase() {
    if (this.count >= 3) return;
    this.count++;
  }

  decrease() {
    if (this.count <= 0) return;
    this.count--;
  }
}
