import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoOcrComponent } from './go-ocr.component';

describe('GoOcrComponent', () => {
  let component: GoOcrComponent;
  let fixture: ComponentFixture<GoOcrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoOcrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoOcrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
