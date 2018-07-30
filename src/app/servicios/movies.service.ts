import { Injectable } from '@angular/core';

//
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

export interface Item { nombre: string; }

@Injectable()

// @Injectable({
//  providedIn: 'root'
// })

export class MoviesService {
  
  private moviesCollection: AngularFirestoreCollection<Item>;
  movies: Observable<Item[]>;

  constructor(
  	private db: AngularFirestore
  ) {
  		this.moviesCollection = db.collection<Item>('peliculascinema');
  		this.movies = this.moviesCollection.valueChanges();
  }

  getMovies() {

  	return this.movies;
  }

}
