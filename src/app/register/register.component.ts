import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  model = {
    "username": "",
    "password": "",
    "emailid": ""
  }
  constructor(private data:DataService) { }

  ngOnInit() {
  }
  onregister() {
    this.data.register(this.model).subscribe(res=>{
      alert("registered")
    })


  }
}
