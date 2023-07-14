import { TestBed, inject } from '@angular/core/testing';
import {HttpClient} from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthenticationService } from './authentication.service';

describe('AuthenticationService', () => {
  let service: AuthenticationService;
  let httpClient:HttpClient

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClient, HttpClientTestingModule],
      providers: [AuthenticationService],
    });
    service = TestBed.inject(AuthenticationService);
    httpClient = TestBed.get(HttpClient);
  });

  it('should be created',inject([AuthenticationService],(service:AuthenticationService) => {
    expect(service).toBeTruthy();
  }))

});
