import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/viewModels/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor() { }
  users : User[] = [
    new User("enom1" , "email1@domaine.com"),
    new User("rnom2" , "email2@domaine.com"),
    new User("anom3" , "email3@domaine.com"),
  ];
  users2;
  ngOnInit() {
    this.users2 = this.users;
  }

  search(val){
    console.log(val);
    this.users = this.users2;
    let aux : User[] = [];
    for(let u of this.users){
      if((u.name.indexOf(val)>=0)||(u.email.indexOf(val)>=0)){
        aux.push(u);
      }
    }
    this.users = aux;
  }

  sort(){
    (this.users || []).sort((a : User , b:User)=> a.name <b.name ? -1 : 1);
  }
}
