import { Component, OnInit } from '@angular/core';
// Servicios
import { AuthService } from '../../servicios/auth.service';
// Enrutador
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-register',
  templateUrl: './page-register.component.html',
  styleUrls: ['./page-register.component.scss']
})
export class PageRegisterComponent implements OnInit {

	public email: string;
	public password: string;

  constructor(
  	public authService: AuthService,
  	public router: Router
  ) { }

  ngOnInit() {
  }

  onSubmitAddUser(){
  	this.authService.registerUser(this.email, this.password)
      .then( (res) => {
        this.router.navigate(['/private']);
      }).catch((err) => {
        this.router.navigate(['/login']);
      });
  }
}
