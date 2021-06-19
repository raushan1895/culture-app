import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './components/pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotfoundComponent } from './components/pages/notfound/notfound.component';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { PortfolioComponent } from './components/pages/portfolio/portfolio.component';
import { ServicesComponent } from './components/pages/services/services.component';
import { LoginComponent } from './components/login/login.component';
import { TeamsComponent } from './components/pages/teams/teams.component'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NotfoundComponent,
    AboutUsComponent,
    ContactComponent,
    PortfolioComponent,
    ServicesComponent,
    LoginComponent,
    TeamsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
