import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  model = {
    "email": "sai",
    "rating": 2,
    "complaints":"",
    "comments":""
   }
  //get diagnostic() { return JSON.stringify(this.model); }
  constructor(private data: DataService) { }

  ngOnInit() {
  }
  onsubmit(){
    alert("onsubmitcalled")
    this.data.submitfeedback(this.model).subscribe(res=>{
    
    })
  }
 

}
