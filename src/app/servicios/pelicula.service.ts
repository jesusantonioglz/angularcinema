import { Injectable } from '@angular/core';

// AngularFire
// este import lo añadi hoy a las 16:57
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

// Models
import { Pelicula } from '../models/pelicula';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {
	
	peliculaList: AngularFireList<any>;
//	selectedPelicula: Pelicula = new Pelicula();



  constructor(
  	private firebase: AngularFireDatabase
  ) { }
  

  /*constructor(
    private firestore: AngularFirestore
  ) { }
  */

  /*public getPeliculas() {
    return this.firestore.collection('peliculas').snapshotChanges();
  }*/

  getPeliculas(){
  	return this.peliculaList = this.firebase.list('peliculas');
  }



















  insertPelicula(pelicula: Pelicula){
  	this.peliculaList.push({
  		Titulo: pelicula.Titulo,
  		Sinopsis: pelicula.Sinopsis
  	});
  }

  updatePelicula(pelicula: Pelicula){
  	this.peliculaList.update(pelicula.$key, {
  		Titulo: pelicula.Titulo,
  		Sinopsis: pelicula.Sinopsis
  	});
  }

  deletePelicula($key: string){
  	this.peliculaList.remove($key);
  }
}
