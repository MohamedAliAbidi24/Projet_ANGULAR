import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  readonly links = ['Accueil', 'Profil', 'Conférences', 'Amis', 'Notifications', 'Admin'];
  readonly active = signal('Accueil');

  select(link: string): void {
    this.active.set(link);
  }
}
