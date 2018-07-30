import { Component, OnInit } from '@angular/core';
// Servicios
import { StarService, Item } from '../../servicios/star.service';
// Angularfire
import { AngularFireAuth } from 'angularfire2/auth';
// Enrutador
import { ActivatedRoute, Params, Router } from '@angular/router';
// Forms
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
	selector: 'app-page-votes',
	templateUrl: './page-votes.component.html',
	styleUrls: ['./page-votes.component.scss']
})

export class PageVotesComponent implements OnInit {

					pelicula: any;
					isLoadingData: boolean;
	public formRating: number;
	private idPelicula: string;
	private userId: string;
					ratingForm: FormGroup;
	private valoraciones: Array<any>;
	private ratingUser: any;

	constructor(
		afAuth: AngularFireAuth,
		private rutaActiva: ActivatedRoute,
		private starS: StarService,
		formBuilder: FormBuilder) {
		// UID del usuario
		afAuth.authState.subscribe(user => {
			if (user) {
				this.userId = user.uid
			}
		});	// formControlName
		this.ratingForm = formBuilder.group({
			rating: ["0"]
		});	// Recibo parametros
		this.idPelicula = this.rutaActiva.snapshot.params["id"];
				// Busco pelicula y hago referencias.
		this.starS.getMovie(this.idPelicula).subscribe(doc => {
			this.valoraciones = doc.valoraciones;
			this.ratingUser = this.valoraciones.filter(val => val.userId == this.userId);
			if (this.ratingUser) {
			}
			this.pelicula = doc;
			this.formRating = doc.promedio;
			this.isLoadingData = false;
		});
	}

	ngOnInit() {
		// carga de datos = true
		this.isLoadingData = true;
		// recibo parametros
		this.idPelicula = this.rutaActiva.snapshot.params["id"];
		// hago referencias
		this.starS.getMovie(this.idPelicula).subscribe(doc => {
			this.valoraciones = doc.valoraciones;
			this.ratingUser = this.valoraciones.filter(val => val.userId == this.userId);
			console.log(this.ratingUser);
			if (this.ratingUser.length > 0) {
				this.ratingForm.get('rating').patchValue(this.ratingUser[0].valoracionDada.toString());
			} else {
				this.ratingUser = null
			}
			this.pelicula = doc;
			this.formRating = doc.promedio;
			this.isLoadingData = false;
		});

	}

	votos() {
		// si encuentra al usuario ya en valoraciones modifica
		if (this.valoraciones.find(user => user.userId == this.userId))
			this.valoraciones.map(map => {
				if (map.userId == this.userId) {
					map.valoracionDada = Number(this.ratingForm.get('rating').value);
				}
			})
		else {
			// inserta en valoraciones el nuevo voto
			this.valoraciones.push({ userId: this.userId, valoracionDada: Number(this.ratingForm.get('rating').value) })
		}
		let promedio = this.PromedioPelicula(this.valoraciones);
		this.starS.addRating(this.idPelicula, this.valoraciones, promedio);
	}

	PromedioPelicula(valoraciones: Array<any>) {
		// promedio
		let promedio = 0;
		// suma
		valoraciones.forEach(usuario => promedio += usuario.valoracionDada);
		// suma / cantidad de objetos encontrados en valoraciones[]
		return promedio = promedio / valoraciones.length;
	}
}
