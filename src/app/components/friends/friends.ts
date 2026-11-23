import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-friends',
  imports: [FormsModule],
  templateUrl: './friends.html',
  styleUrl: './friends.css',
})
export class Friends {
  // Two-way data binding: the 3 inputs share the same value
  userName = signal('Ahmed');

  friends = ['Sami', 'Sarra', 'Amine'];
}
