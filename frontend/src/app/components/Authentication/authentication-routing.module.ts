import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  // {path:'', component: LoginComponent},
  // { path:'auth',component:AuthenticationComponent,
  //     children :[
  //         { path: 'register', component: RegisterComponent},
  //         { path: 'login', component: LoginComponent}
  //       ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
