import { Injectable } from '@angular/core';
// firestore
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
// rxjs
import { Observable } from 'rxjs';

export interface Item {

	Titulo: string;
	wallpaper: string;
	Sinopsis: string;
	promedio: number;
	valoraciones: any;
}


@Injectable({
	providedIn: 'root'
})
export class StarService {

		private movieDocument: AngularFirestoreDocument<Item>;
		movie: Observable<Item>;

		constructor(
			private afs: AngularFirestore
		) { }

		getMovie( movie ){

			this.movieDocument = this.afs.collection( 'peliculascinema' ).doc( movie );
			//console.log(this.movieDocument);
			this.movie = this.movieDocument.valueChanges();
			return this.movie;

		}

		addRating( movie, valoraciones, promedio ){

			this.movieDocument = this.afs.collection( 'peliculascinema' ).doc( movie );
			return this.movieDocument.update({
					valoraciones,
					promedio
			})

		}

}
