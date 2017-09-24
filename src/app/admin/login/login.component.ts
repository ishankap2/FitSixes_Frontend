import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  router: Routes;
  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  username: string;
  password: string;

  Login(){
    if(this.username =="fit6s" && this.password=="2017"){
      this.auth.loginAdmin();
      window.location.reload()
    }
  }
}
