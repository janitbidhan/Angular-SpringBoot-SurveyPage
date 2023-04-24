import { Component, OnInit } from '@angular/core';
import { TestService } from './test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Janit Bidhan';

  constructor(ts: TestService){
    //ts.printScreen("Welcome to page")
  }

  ngOnInit(){
  }

}
