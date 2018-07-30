

import { Component, OnInit } from '@angular/core';
// servicio StarService
import { StarService, Item } from '../../servicios/star.service';
// firestore
import { AngularFirestore } from 'angularfire2/firestore';
// Autenticacion FireBase
import { AngularFireAuth } from 'angularfire2/auth';
// Router
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
	selector: 'app-page-votes',
	templateUrl: './page-votes.component.html',
	styleUrls: ['./page-votes.component.scss']
})
export class PageVotesComponent implements OnInit {

	pelicula: any;								// pelicula
	isLoadingData: boolean;						// Está cargando datos?
	public formRating: number;					// promedio
	private idPelicula: string;					// ID de la pelicula
	private userId: string;						// UID del usuario activo

	constructor(
		private afAuth: AngularFireAuth,		// Autenticacion
		private rutaActiva: ActivatedRoute,		// Ruta de parametros
		private router: Router,					// Enrutador
		private starS: StarService ) { 			// servicio
		//this.userId = this.afAuth.auth.currentUser.uid;		// UID del usuario activo obtenida en Firebase
		afAuth.authState.subscribe(user => {
			if (user) { this.userId = user.uid }
		});
	}

	ngOnInit() {
		this.isLoadingData = true;
		this.idPelicula = this.rutaActiva.snapshot.params["id"]; /*	Obtenemos el id de la pelicula por el parametro que recibimos, ayudandonos de la rutaActiva.		*/
		this.starS.getMovie(this.idPelicula).subscribe(doc => {
			this.pelicula = doc;				// Hace referencia al documento (la pelicula en la B. D.)
			this.formRating = doc.promedio;		// Hace referencia al atributo 'promedio' de dicha pelicula
			//this.formRating = this.pelicula.promedio;
			this.isLoadingData = false;
			//console.log(this.pelicula); 		//obtenemos del servicio la Pelicula y obtenemos sus atributos asignándolos a las variables/page-votes.ts
		});
	}

	votos() {
		let valoraciones: Array<any> = this.pelicula.valoraciones;		/*	Hace referencia al atributo 'valoraciones' array de las valoraciones */
		let posicion = valoraciones.findIndex(usuario => usuario.userId === this.userId);	/*	Obtenemos el indice donde se encuentra el usuario que vota */
		let buscarUsuario = valoraciones.find(usuario => usuario.userId === this.userId);	/*	Buscamos al usuario que vota */
		let usuario = {												/*	Creamos una variable usuario para hacer referencia al usuario del array valoraciones */
			userId: this.userId,				//	UID del usuario que voto.
			valoracionDada: this.formRating		//	Valoración dada por el usuario.
		}
		if (buscarUsuario) {					/*	Si el usuario existe lo cortamos del array valoraciones mediante el indice */
			valoraciones.splice(posicion, 1);
			// valoraciones => Array
			// .splice( indice, howMany) => Elimina un elemento del Array y nos lo otorga.
			// indice => Posición del array para detectar el elemento a eliminar.
			// howMany => Cantidad de elementos a eliminar del Array.
		}
		valoraciones.push(usuario);			// Insertamos al usuario en el Array valoraciones
		let promedio = this.PromedioPelicula(valoraciones);		/*	Obtenemos el promedio de las votaciones con el método Promedio. */
		this.starS.addRating(this.idPelicula, valoraciones, promedio);		// Modificamos las votaciones
	}

	PromedioPelicula(valoraciones: Array<any>) {
		let promedio = 0;
		valoraciones.forEach(usuario => promedio += usuario.valoracionDada);
		return promedio = promedio / valoraciones.length;
	}
}
