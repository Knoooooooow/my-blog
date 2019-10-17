import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CanvasArcComponent } from './canvas-arc.component';

describe('CanvasArcComponent', () => {
  let component: CanvasArcComponent;
  let fixture: ComponentFixture<CanvasArcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CanvasArcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CanvasArcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
