import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-date',
  templateUrl: './comp-date.component.html',
  styleUrls: ['./comp-date.component.css']
})
export class CompDateComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  today: String=new Date().toDateString();

}
