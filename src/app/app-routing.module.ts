import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthFormComponent } from './auth-form/auth-form.component';

const routes: Routes = [
  { path: '', redirectTo: 'Auth', pathMatch: 'full' },
  {path:'Auth', component:AuthFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
