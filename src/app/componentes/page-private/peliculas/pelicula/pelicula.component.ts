import { Component, OnInit } from '@angular/core';

// Servicios
import { PeliculaService } from '../../../../servicios/pelicula.service';

// Clase Pelicula
import { Pelicula } from '../../../../models/pelicula';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.scss']
})
export class PeliculaComponent implements OnInit {

  constructor(
  	private peliculaService: PeliculaService
  ) { }

  ngOnInit() {
  	this.peliculaService.getPeliculas();
  }

}
