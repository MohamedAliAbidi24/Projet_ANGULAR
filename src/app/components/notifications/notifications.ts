import { Component } from '@angular/core';

@Component({
  selector: 'app-notifications',
  imports: [],
  templateUrl: './notifications.html',
  styleUrl: './notifications.css',
})
export class Notifications {
  notifications = ['Nouvelle conférence : Angular 21', 'Rappel : Signals Workshop bientôt complet'];
  show = false;

  toggle(): void {
    this.show = !this.show;
  }
}
