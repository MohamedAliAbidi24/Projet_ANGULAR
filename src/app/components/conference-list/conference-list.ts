import { Component, computed, signal } from '@angular/core';
import { DatePipe, NgClass, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Conference } from '../../conference';

@Component({
  selector: 'app-conference-list',
  imports: [FormsModule, NgClass, UpperCasePipe, DatePipe],
  templateUrl: './conference-list.html',
  styleUrl: './conference-list.css',
})
export class ConferenceList {
  searchText = signal('');

  conferences = signal<Conference[]>([
    {
      id: 1,
      title: 'Angular 21 Conference',
      description: 'Discover Angular 21',
      date: new Date('2027-11-15'),
      place: 'Tunis',
      maxParticipants: 100,
      nbParticipants: 75,
    },
    {
      id: 2,
      title: 'Signals Workshop',
      description: 'Learn Angular Signals',
      date: new Date('2027-11-30'),
      place: 'Ariana',
      maxParticipants: 50,
      nbParticipants: 44,
    },
    {
      id: 3,
      title: 'Web Conference',
      description: 'Modern web technologies',
      date: new Date('2027-11-20'),
      place: 'Sousse',
      maxParticipants: 80,
      nbParticipants: 80,
    },
  ]);

  upcoming = computed(() => {
    const now = new Date();
    return this.conferences().filter((c) => c.date > now);
  });

  filtered = computed(() => {
    const term = this.searchText().trim().toLowerCase();
    return this.upcoming().filter((c) => c.title.toLowerCase().includes(term));
  });

  remaining(c: Conference): number {
    return c.maxParticipants - c.nbParticipants;
  }

  buttonClass(c: Conference): string {
    const left = this.remaining(c);
    if (left <= 0) return 'btn-red';
    if (left < 10) return 'btn-orange';
    return 'btn-green';
  }

  register(c: Conference): void {
    if (this.remaining(c) <= 0) return;
    this.conferences.update((list) =>
      list.map((x) => (x.id === c.id ? { ...x, nbParticipants: x.nbParticipants + 1 } : x)),
    );
  }
}
