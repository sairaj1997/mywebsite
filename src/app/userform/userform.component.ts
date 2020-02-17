import { Component, OnInit } from '@angular/core';
import { User } from '../user'
import { DataService } from '../data.service';

@Component({
  selector: 'app-userform',
  templateUrl: './userform.component.html',
  styleUrls: ['./userform.component.css']
})
export class UserformComponent implements OnInit {
  zodiac = ['cancer', 'leo', 'capricon', 'aries'];
  // model = new User('sairaj', 'e.sairaj17@gmail.com', 'sairaj1997', this.zodiac[0]);
  model = {
    'username': '',
    'password': ''
  }
  get diagnostic() { return JSON.stringify(this.model); }
  constructor(private data:DataService) { }

  ngOnInit() {

  }
  onsubmit(){
    this.data.login(this.model).subscribe(res=>{
      alert(JSON.stringify(res));
    });
  }

}
