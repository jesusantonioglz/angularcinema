import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageLoginComponent } from './componentes/page-login/page-login.component';
import { PageHomeComponent } from './componentes/page-home/page-home.component';
import { PageVotesComponent } from './componentes/page-votes/page-votes.component';
import { PageGraphsComponent } from './componentes/page-graphs/page-graphs.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { PageRegisterComponent } from './componentes/page-register/page-register.component';
import { PagePrivateComponent } from './componentes/page-private/page-private.component';
import { PageNotFoundComponent } from './componentes/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    PageLoginComponent,
    PageHomeComponent,
    PageVotesComponent,
    PageGraphsComponent,
    NavbarComponent,
    PageRegisterComponent,
    PagePrivateComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
