import { ElementRef } from '@angular/core';
import { ViewChild } from '@angular/core';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css', '../../../styles/hamburgers/dist/hamburgers.css'],
  animations: [
    //   trigger('flyInOut', [
    //     state('in', style({ transform: 'translateX(0)' })),
    //     transition('void => *', [
    //       style({ transform: 'translateY(-100%)' }),
    //       animate(300)
    //     ]),
    //     transition('* => void', [
    //       animate(500, style({ transform: 'translateY(100%)' }))
    //     ])
    //   ])
  ]
})
export class NavComponent implements OnInit {
  @ViewChild("hiddenNav") hiddenNav: ElementRef;
  @ViewChild("hamburger") hamburger: ElementRef;
  // @ViewChild("image1") image1: ElementRef;
  // @ViewChild("image2") image2: ElementRef;

  // @ViewChild("pa1") pa1: ElementRef;
  // @ViewChild("pa2") pa2: ElementRef;




  isIn = false;

  toggle() {
    this.isIn = !this.isIn;
  }

  constructor() { }
  ngOnInit(): void {
  }
  burgerClicked() {
    this.hiddenNav.nativeElement.classList.toggle('hide');
    this.hamburger.nativeElement.classList.toggle('is-active');

    // ...
  }
  // over(num) {
  //   console.log('f')
  //   switch (num) {
  //     case 1:
  //       this.image1.nativeElement.classList.add('hide');
  //       this.pa1.nativeElement.classList.remove('hide');
  //       break;
  //     case 2:
  //       this.image2.nativeElement.classList.add('hide');
  //       this.pa2.nativeElement.classList.remove('hide');
  //       break;
  //   }


  // }

  // left(num) {
  //   switch (num) {
  //     case 1:
  //       this.image1.nativeElement.classList.remove('hide');
  //       this.pa1.nativeElement.classList.add('hide');
  //       break;
  //     case 2:
  //       this.image2.nativeElement.classList.remove('hide');
  //       this.pa2.nativeElement.classList.add('hide');
  //       break;
  //   }


  // }
}
