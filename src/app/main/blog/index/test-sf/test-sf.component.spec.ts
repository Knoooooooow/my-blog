import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestSfComponent } from './test-sf.component';

describe('TestSfComponent', () => {
  let component: TestSfComponent;
  let fixture: ComponentFixture<TestSfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestSfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestSfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
