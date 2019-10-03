import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalPracticeComponent } from './personal-practice.component';

describe('PersonalPracticeComponent', () => {
  let component: PersonalPracticeComponent;
  let fixture: ComponentFixture<PersonalPracticeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalPracticeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
