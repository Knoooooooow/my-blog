import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSfChildComponent } from './test-sf-child.component';

describe('TestSfChildComponent', () => {
  let component: TestSfChildComponent;
  let fixture: ComponentFixture<TestSfChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestSfChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSfChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
