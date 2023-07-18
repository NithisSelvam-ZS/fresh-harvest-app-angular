import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DODComponent } from './dod.component';

describe('DODComponent', () => {
  let component: DODComponent;
  let fixture: ComponentFixture<DODComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DODComponent]
    });
    fixture = TestBed.createComponent(DODComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
