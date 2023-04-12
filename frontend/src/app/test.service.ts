import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }

  printScreen(args:string){
    console.count(args);
    alert(args);
  }
}
