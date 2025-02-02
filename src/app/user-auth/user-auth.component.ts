import { Component, OnInit } from '@angular/core';
import { Login, SignUp } from '../data-type';
import { CommonModule } from '@angular/common';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-auth',
  imports: [CommonModule, FormsModule],
  templateUrl: './user-auth.component.html',
  styleUrl: './user-auth.component.css'
})
export class UserAuthComponent implements OnInit {

  authError:string="";
  showLogin:boolean=true;
  constructor(private user: UserService){}

  ngOnInit(): void {
    this.user.userAuthReload();
  }

  signUp(data: SignUp) {
    this.user.UserSignUp(data);
  }

  openSignUp(){
    this.showLogin = false;
  }
  openLogin(){
    this.showLogin = true;
  }

  login(data:Login){
    this.user.userLogin(data);
    this.user.invalidUserAuth.subscribe((result) =>{
      if(result){
        this.authError = "User Not Found";
      }
      
    })
  }

}
