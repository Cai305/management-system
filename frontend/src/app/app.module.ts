import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthenticationModule } from './components/Authentication/authentication.module';
import { PrivateModule } from './components/Private/private.module';
import { LandingComponent } from './components/Public/landing/landing.component';
import { FooterComponent } from './components/Shared/footer/footer.component';
import { NavbarComponent } from './components/Shared/navbar/navbar.component';
import { NotfoundComponent } from './components/Public/notfound/notfound.component';




@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavbarComponent,
    FooterComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AuthenticationModule,
    PrivateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
