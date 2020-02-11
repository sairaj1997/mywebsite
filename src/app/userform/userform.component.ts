import { Component, OnInit } from '@angular/core';
import{User} from '../user'

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {
  zodiac=['cancer','leo','capricon','aries'];
model=new User('sairaj','e.sairaj17@gmail.com','sairaj1997',this.zodiac[0]);
get diagnostic(){return JSON.stringify(this.model);}
  constructor() { }

  ngOnInit() {
    
  }

}
