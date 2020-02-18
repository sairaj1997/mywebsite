import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-showfeedback',
  templateUrl: './showfeedback.component.html',
  styleUrls: ['./showfeedback.component.css']
})
export class ShowfeedbackComponent implements OnInit {
  feedbacks;
  constructor(private data: DataService) { }

  ngOnInit() {
    return this.data.showfeedback().subscribe(res => {
      this.feedbacks=res;
    });
  }

}
