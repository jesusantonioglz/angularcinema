import { Injectable } from '@angular/core';
// firestore
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
// rxjs
import { Observable } from 'rxjs';

export interface Item {
	/*
	userId: any;
	movieId: any;
	value: number;
	*/

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

		//private movieDocument: AngularFirestoreDocument<Item>;
		// movie: Observable<Item>;
		private movieDocument: AngularFirestoreDocument<Item>;
		movie: Observable<Item>;

		constructor(
			private afs: AngularFirestore
		) { }

		getMovie( movie ){
	//getMovie( Titulo ){}

			this.movieDocument = this.afs.collection( 'peliculascinema' ).doc( movie );
			this.movie = this.movieDocument.valueChanges();
			return this.movie;
			//const movieRef =  this.afs.collection('peliculascinema', ref => ref.where('Titulo', '==', Titulo) );
			//return movieRef.valueChanges();

		}

		addRating( movie, valoraciones, promedio ){

			this.movieDocument = this.afs.collection( 'peliculascinema' ).doc( movie );
			return this.movieDocument.update({
					valoraciones,
					promedio
			})

		}

	// Star reviews that belong to a user
//	getUserStars(userId) {
//		const starsRef = this.afs.collection('stars', ref => ref.where('userId', '===', userId) );
//		return starsRef.valueChanges();
//	}

	// Get all stars that belog to a Movie
//	getMovieStars(movieId) {
//		const starsRef = this.afs.collection('stars', ref => ref.where('movieId', '===', movieId) );
//		const starsRef = this.afs.collection("peliculascinema").doc('')
//		('stars', ref => ref.where('movieId', '==', movieId) );
//		return starsRef.valueChanges();
//	}

	// Create or update star
//	setStar(userId, movieId, value) {
		// Star document data
//		const star: Star = { userId, movieId, value };

		// Custom doc ID for relationship
//		const starPath = `stars/${star.userId}_${star.movieId}`;

		// Set the data, return the promise
//		return this.afs.doc(starPath).set(star)
//	}

}
