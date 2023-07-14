import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoryPageComponent } from './category-page.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('CategoryPageComponent', () => {
  let component: CategoryPageComponent;
  let fixture: ComponentFixture<CategoryPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryPageComponent],
      imports: [HttpClientModule],
      providers: [HttpClient],
    });
    fixture = TestBed.createComponent(CategoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
