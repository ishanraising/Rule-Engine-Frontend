import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyruleComponent } from './modifyrule.component';

describe('ModifyruleComponent', () => {
  let component: ModifyruleComponent;
  let fixture: ComponentFixture<ModifyruleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModifyruleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModifyruleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
