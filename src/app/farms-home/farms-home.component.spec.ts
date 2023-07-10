import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmsHomeComponent } from './farms-home.component';

describe('FarmsHomeComponent', () => {
  let component: FarmsHomeComponent;
  let fixture: ComponentFixture<FarmsHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FarmsHomeComponent]
    });
    fixture = TestBed.createComponent(FarmsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
