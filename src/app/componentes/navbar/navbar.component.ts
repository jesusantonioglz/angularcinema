import { Component, OnInit } from '@angular/core';
// Servicios
import { AuthService } from '../../servicios/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

	public isLogin: boolean;
	public nombreUsuario: string;
	public emailUsuario: string;

  constructor(
  	public authService: AuthService
  ) { }

  ngOnInit() {
  	this.authService.getAuth().subscribe(auth => {
  		if(auth) {

  			this.isLogin = true;
  			this.nombreUsuario = auth.displayName;
  			this.emailUsuario = auth.email;
  		} else {
  			this.isLogin = false;
  		}
  	})
  }

  onClickLogout(){
  	this.authService.logout();
  }

}
