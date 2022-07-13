import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './components/Authentication/authentication.component';
import { LoginComponent } from './components/Authentication/login/login.component';
import { RegisterComponent } from './components/Authentication/register/register.component';
import { LandingComponent } from './components/Public/landing/landing.component';
import { NotfoundComponent } from './components/Public/notfound/notfound.component';



const routes: Routes = [
 { path: '', component: LandingComponent},
 { path:'auth',component:AuthenticationComponent,
      children :[
          { path: 'register', component: RegisterComponent},
          { path: 'login', component: LoginComponent}
        ]},
  { path: '**', component: NotfoundComponent }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
