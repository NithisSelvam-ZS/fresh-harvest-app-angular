import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FarmsHomeComponent } from './farms-home/farms-home.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { CategoryPageComponent } from './category-page/category-page.component';



const routes: Routes = [
  { path: '', redirectTo: 'Auth', pathMatch: 'full' },
  {path:'Auth', component:AuthFormComponent},
  {path:'Home', component:HomePageComponent},
  {path:'Navbar', component:NavbarComponent},
  {path:'Footer', component:FooterComponent},
  {path:'Farms', component:FarmsHomeComponent},
  {path:'Sidebar', component:SideBarComponent},
  {path:'Category',component:CategoryPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
