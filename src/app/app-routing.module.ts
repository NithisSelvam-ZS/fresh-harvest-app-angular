import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FarmsHomeComponent } from './farms-home/farms-home.component';



const routes: Routes = [
  { path: '', redirectTo: 'Farms', pathMatch: 'full' },
  {path:'Auth', component:AuthFormComponent},
  {path:'Home', component:HomePageComponent},
  {path:'Navbar', component:NavbarComponent},
  {path:'Footer', component:FooterComponent},
  {path:'Farms', component:FarmsHomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
