import { stringify } from '@angular/compiler/src/util';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  info:any;
  card:any;
  gg='green';
  title = 'albums';
  myDS:boolean=true;
  imgpath="./assets/images/gym.jpg";
  ip="Good Evening Friends test ";
ngOnInit()
{

  this.info=
  [
    {
      name:"waliullah",
      branch:"CS",
      email:"jiems22@gmil.com",
    },
    {
      name:"taufique",
      branch:"CS",
      email:"jiems44@gmil.com",
    }

  ]

  

}
}
