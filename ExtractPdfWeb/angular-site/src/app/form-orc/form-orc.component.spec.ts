import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormOrcComponent } from './form-orc.component';

describe('FormOrcComponent', () => {
  let component: FormOrcComponent;
  let fixture: ComponentFixture<FormOrcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormOrcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormOrcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
