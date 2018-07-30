import { Component, OnInit } from '@angular/core';

// Servicios
import { PeliculaService } from '../../../../servicios/pelicula.service';

// Class Pelicula
import { Pelicula } from '../../../../models/pelicula';

@Component({
  selector: 'app-peliculas-list',
  templateUrl: './peliculas-list.component.html',
  styleUrls: ['./peliculas-list.component.scss']
})
export class PeliculasListComponent implements OnInit {

  peliculaList: Pelicula[];
  //public peliculas = [];

  constructor(
  	private peliculaService: PeliculaService
  ) { }

  //ngOnInit() {
  //}

  ngOnInit() {

  	this.peliculaService.getPeliculas()
  	.snapshotChanges().subscribe( item => {
  		this.peliculaList = [];
  		item.forEach(element => {
  			let x = element.payload.toJSON();
  			x["$key"] = element.key;
  			this.peliculaList.push(x as Pelicula);
  		});
  	});
  }

  /*ngOnInit() {
    this.peliculaService.getPeliculas().subscribe((peliculasSnapshot) => {
      this.peliculas = [];
      peliculasSnapshot.forEach((catData: any) => {
        this.cats.push({
          id: catData.payload.doc.id,
          data: catData.payload.doc.data()
        });
      })
    });
  }*/

}
