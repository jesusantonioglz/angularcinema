import { Injectable } from '@angular/core';
// Firestore
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
// rxjs
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

export interface Item { nombre: string; }

@Injectable()

// @Injectable({
//  providedIn: 'root'
// })

export class MoviesService {

  private moviesCollection: AngularFirestoreCollection<Item>;
  // movies: Observable<Item[]>;
  movies: Observable<any[]>;;

  onInit(){
    this.movies = this.db.collection("peliculascinema").valueChanges();
  }

  constructor(
  	private db: AngularFirestore
  ) {
    this.movies = this.db
      .collection("peliculascinema")
      .snapshotChanges()
      .pipe(map(
        actions => {
          return actions.map(a => {
            const data = a.payload.doc.data() as any;
            const id = a.payload.doc.id;
            return { id, ...data };
          }
          )
        }));

  		// this.moviesCollection = this.db.collection<Item>('peliculascinema');
  		// this.movies = this.moviesCollection.valueChanges();
  }

  getMovies() {

  	return this.movies;
  }

}
