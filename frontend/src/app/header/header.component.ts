import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  addNumbers(a: number, b:number){
   return a+b;
  }
  onClickSubmit(values:any){
    console.log(values);
    alert(values.user);
  }
  products=[
    {
      name:"Rob",
      course:"CS",
      describtion:"green flags"
    },
    {
      name:"Doe",
      course:"CS",
      describtion:""
    },
    {
      name:"Snow",
      course:"CS",
      describtion:"    "

    },
    {
      name:"John",
      course:"CS",
      describtion:"blue flags"
    },
  ]

}
