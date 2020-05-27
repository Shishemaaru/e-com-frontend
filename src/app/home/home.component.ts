import { Component, OnInit } from '@angular/core';
import { faMobileAlt, faTv, faHeadphonesAlt} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  mobile = faMobileAlt;
  tv = faTv;
  headph = faHeadphonesAlt;
  showmobile=true;
  showappliance=false;
  showacc=false;
  myColor;
  selected1=true;
  selected2=false;
  selected3=false;

  constructor() { }

  ngOnInit(): void {
  }
//   variable(){
//     "use strict";
// var btn = document.querySelector('#button');
// $(window).scroll(function () {
//   if ($(window).scrollTop() > 300) {
//     btn.addClass('show');
//   } else
//   {
//     btn.removeClass('show');
//   }
// });
// btn.on('click', function (e) {
//   e.preventDefault();
//   $('html, body').animate({ scrollTop: 0 }, '300');
// });
//   }

  toggleappl(){
    this.hideall();
    this.showappliance=true;
    this.selected2=true;
  }
  toggleacc(){
    this.hideall();
    this.showacc=true;
    this.selected3=true;
  }
  togglephones(){
    this.hideall();
    this.showmobile=true;
    this.selected1=true;
}


  hideall(){
    this.showmobile=false;
    this.showacc=false;
    this.showappliance=false;
    this.selected1=false;
    this.selected2=false;
    this.selected3=false;

  }

}
