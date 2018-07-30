import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// componentes
import { PageHomeComponent } from './componentes/page-home/page-home.component';
import { PageLoginComponent } from './componentes/page-login/page-login.component';
import { PageRegisterComponent } from './componentes/page-register/page-register.component';
import { PagePrivateComponent } from './componentes/page-private/page-private.component';
import { PageVotesComponent } from './componentes/page-votes/page-votes.component';
import { PageGraphsComponent } from './componentes/page-graphs/page-graphs.component';
import { PageNotFoundComponent } from './componentes/page-not-found/page-not-found.component';

//rutas
const routes: Routes = [

	{ path: '', component: PageHomeComponent },
	{ path: 'login', component: PageLoginComponent },
	{ path: 'register', component: PageRegisterComponent },
	{ path: 'private', component: PagePrivateComponent },
	{ path: 'votes/:id', component: PageVotesComponent, pathMatch: 'full' },
	{ path: 'graphs', component: PageGraphsComponent },
	{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
