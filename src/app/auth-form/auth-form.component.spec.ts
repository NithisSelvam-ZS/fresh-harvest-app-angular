import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthFormComponent } from './auth-form.component';
import { AuthenticationService } from 'src/Services/authentication.service';
import { of } from 'rxjs';

describe('AuthFormComponent', () => {
  let component: AuthFormComponent;
  let fixture: ComponentFixture<AuthFormComponent>;
  let apiService: jasmine.SpyObj<AuthenticationService>;
  let routerService: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    const authServiceSpy = jasmine.createSpyObj('AuthenticationService', [
      'addUsers',
      'validateUser',
    ]);
    const routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [AuthFormComponent],
      providers: [
        FormBuilder,
        { provide: AuthenticationService, useValue: authServiceSpy },
        { provide: Router, useValue: routerSpy },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthFormComponent);
    component = fixture.componentInstance;
    apiService = TestBed.inject(AuthenticationService) as jasmine.SpyObj<AuthenticationService>;
    routerService = TestBed.inject(Router) as jasmine.SpyObj<Router>;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });


  it('should navigate to Home when authenticateUser is called with valid credentials', () => {
    const email = 'test@example.com';
    const password = 'password';
    component.Email = email;
    component.Password = password;

    apiService.validateUser.and.returnValue(of([{ id: 1, email, password }]));

    component.authenticateUser();

    expect(routerService.navigate).toHaveBeenCalledWith(['/Home']);
  });

  it('should log error message when authenticateUser is called with invalid credentials', () => {
    const email = 'test@example.com';
    const password = 'password';
    component.Email = email;
    component.Password = password;

    apiService.validateUser.and.returnValue(of([]));

    spyOn(console, 'log');

    component.authenticateUser();

    expect(console.log).toHaveBeenCalledWith('Enter Valid Email and Password');
  });

});
