import { Component } from '@angular/core';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent {

  islogginForm=true;
  isRegisterForm = false;

  onClickRegister(){
    this.islogginForm=false;
    this.isRegisterForm=true;
  }
  onClickLogin(){
    this.islogginForm=true;
    this.isRegisterForm=false;
  }

}
