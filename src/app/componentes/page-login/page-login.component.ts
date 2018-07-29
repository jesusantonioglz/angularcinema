import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.scss']
})
export class PageLoginComponent implements OnInit {
	
  public email: string;
	public password: string;

  constructor(
  	public authService: AuthService,
  	public router: Router
  ) { }

  ngOnInit() {
  }

  onSubmitLogin(){
    this.authService.loginEmail(this.email, this.password)
      .then( (res) => {
        this.router.navigate(['/private']);
      }).catch((err) => {
        this.router.navigate(['/login']);
      });
  }
}