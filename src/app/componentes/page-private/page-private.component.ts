import { Component, OnInit } from '@angular/core';

import { MoviesService } from '../../servicios/movies.service';

@Component({
  selector: 'app-page-private',
  templateUrl: './page-private.component.html',
  styleUrls: ['./page-private.component.scss']
})

export class PagePrivateComponent implements OnInit {

  movies: any;

  constructor(
  	private movieS: MoviesService
  ){
  	this.movieS.getMovies()
  	.subscribe( item => {
  		this.movies = item;
  		//console.log(this.movies);
  	})
  }

  ngOnInit() { }

}
