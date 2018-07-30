import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

export interface Item {

	Sinopsis?: string;
	Titulo?: string;
	promedio?: number;
	valoraciones?: [{userId: string, valoracionDada: number}];
	wallpaper?: string;
}

@Injectable({
  providedIn: 'root'
})
export class GraphicsService {

  private moviesCollection: AngularFirestoreCollection<Item>;
  public movies: Observable<Item[]>;
	//ref: Observable<Item[]>;

  constructor(
  	private db: AngularFirestore
  ) {
  		this.moviesCollection = db.collection<Item>( 'peliculascinema' );
  		this.movies = this.moviesCollection.valueChanges();
  }

  getMovies() {

  	return this.movies;
  }

}
