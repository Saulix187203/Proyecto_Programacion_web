import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFormPrimeflexComponent } from './user-form-primeflex.component';

describe('UserFormPrimeflexComponent', () => {
  let component: UserFormPrimeflexComponent;
  let fixture: ComponentFixture<UserFormPrimeflexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserFormPrimeflexComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserFormPrimeflexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
