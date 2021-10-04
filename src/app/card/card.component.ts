import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  address:any;

  constructor() { 

    this.address={
      name:"sayyed Waliullah",
      Prof:"Web Developer",
      add:"U.P India",
      phone:[
        '01234',
        '2345',
        '66776'
      ]


    };
  }

  ngOnInit(): void {
  }

}
