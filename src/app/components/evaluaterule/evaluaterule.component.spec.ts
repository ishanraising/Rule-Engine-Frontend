import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluateruleComponent } from './evaluaterule.component';

describe('EvaluateruleComponent', () => {
  let component: EvaluateruleComponent;
  let fixture: ComponentFixture<EvaluateruleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EvaluateruleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EvaluateruleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
