// @Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Enrutamiento
import { AppRoutingModule } from './app-routing.module';

// Componentes
import { AppComponent } from './app.component';
import { PageLoginComponent } from './componentes/page-login/page-login.component';
import { PageHomeComponent } from './componentes/page-home/page-home.component';
import { PageVotesComponent } from './componentes/page-votes/page-votes.component';
import { PageGraphsComponent } from './componentes/page-graphs/page-graphs.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { PageRegisterComponent } from './componentes/page-register/page-register.component';
import { PagePrivateComponent } from './componentes/page-private/page-private.component';
import { PageNotFoundComponent } from './componentes/page-not-found/page-not-found.component';

// angularfire2
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

// Environments
import { environment } from '../environments/environment';

// Servicios
import { AuthService } from './servicios/auth.service';
import { PeliculaService } from './servicios/pelicula.service';
import { MoviesService } from './servicios/movies.service';
import { StarService } from './servicios/star.service';
import { GraphicsService } from './servicios/graphics.service';
import { AmChartsService } from '@amcharts/amcharts3-angular';

// Componentes Pelicula
import { PeliculasComponent } from './componentes/page-private/peliculas/peliculas.component';
import { PeliculasListComponent } from './componentes/page-private/peliculas/peliculas-list/peliculas-list.component';
import { PeliculaComponent } from './componentes/page-private/peliculas/pelicula/pelicula.component';
import { StarReviewComponent } from './componentes/star-review/star-review.component';

// AmCharts
import { AmChartsModule } from '@amcharts/amcharts3-angular';

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
    PageNotFoundComponent,
    PeliculasComponent,
    PeliculasListComponent,
    PeliculaComponent,
    StarReviewComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    FormsModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    AmChartsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [AuthService, PeliculaService, MoviesService, StarService, GraphicsService, AmChartsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
