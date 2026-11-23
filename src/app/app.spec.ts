import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the home page sections', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const el = fixture.nativeElement as HTMLElement;
    for (const tag of [
      'app-header',
      'app-navbar',
      'app-profile',
      'app-friends',
      'app-notifications',
      'app-conference-list',
      'app-footer',
    ]) {
      expect(el.querySelector(tag), tag).toBeTruthy();
    }
  });
});
