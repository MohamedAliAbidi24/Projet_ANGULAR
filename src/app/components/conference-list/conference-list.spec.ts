import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConferenceList } from './conference-list';

describe('ConferenceList', () => {
  let component: ConferenceList;
  let fixture: ComponentFixture<ConferenceList>;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConferenceList],
    }).compileComponents();

    fixture = TestBed.createComponent(ConferenceList);
    component = fixture.componentInstance;
    el = fixture.nativeElement;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display titles in uppercase and the date formatted', () => {
    expect(el.textContent).toContain('ANGULAR 21 CONFERENCE');
    expect(el.textContent).toContain('15/11/2027');
  });

  it('should color the buttons green / orange / red', () => {
    const buttons = el.querySelectorAll('button');
    expect(buttons[0].classList).toContain('btn-green');
    expect(buttons[1].classList).toContain('btn-orange');
    expect(buttons[2].classList).toContain('btn-red');
  });

  it('should increase nbParticipants on click', async () => {
    (el.querySelectorAll('button')[0] as HTMLButtonElement).click();
    await fixture.whenStable();
    expect(component.conferences()[0].nbParticipants).toBe(76);
  });

  it('should filter by title', async () => {
    component.searchText.set('signals');
    await fixture.whenStable();
    expect(el.querySelectorAll('article').length).toBe(1);
  });
});
