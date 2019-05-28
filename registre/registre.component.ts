import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , Validators} from '@angular/forms';
import { User } from '../viewModels/user';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-registre',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css']
})
export class RegistreComponent implements OnInit {

  constructor(private authService : AuthService) { }
  registerGroup;
  user : User = new User();
  resultat : any;
  ngOnInit() {
    this.authService.getMyIp()
    .subscribe( resultat =>{
      this.resultat = resultat;
      console.log(this.resultat);
      console.log(this.resultat.ip);
    });
    this.registerGroup = new FormGroup({
      'name' : new FormControl(Validators.required),
      'email' : new FormControl(Validators.required , Validators.email),
      'password' : new FormControl(Validators.required)
    });
  }

  inscrir(){
    console.log(this.user);
    this.authService.registerWithEmailAndPassword(this.user.email , this.user.password)
    .then(res=> console.log(res));
  }
  google_signin(){
    console.log(this.user);
    this.authService.loginwithGoogle()
    .then(res=> console.log(res));
  }
  facebook_signin(){
    console.log(this.user);
    this.authService.loginwithFacebook()
    .then(res=> console.log(res));
  }

}
