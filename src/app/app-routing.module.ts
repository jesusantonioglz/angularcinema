import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageHomeComponent } from './componentes/page-home/page-home.component';
import { PageLoginComponent } from './componentes/page-login/page-login.component';
import { PageRegisterComponent } from './componentes/page-register/page-register.component';
import { PagePrivateComponent } from './componentes/page-private/page-private.component';
import { PageNotFoundComponent } from './componentes/page-not-found/page-not-found.component';
import { PageVotesComponent } from './componentes/page-votes/page-votes.component';
import { PageGraphsComponent } from './componentes/page-graphs/page-graphs.component';


const routes: Routes = [
	
	{ path: '', component: PageHomeComponent },
	{ path: 'login', component: PageLoginComponent },
	{ path: 'register', component: PageRegisterComponent },
	{ path: 'private', component: PagePrivateComponent },
	{ path: '**', component: PageNotFoundComponent },
	{ path: 'votes', component: PageVotesComponent },
	{ path: 'graphs', component: PageGraphsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
