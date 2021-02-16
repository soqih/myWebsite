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

  constructor() { }
  ngOnInit(): void {
  }
  burgerClicked() {
    this.hiddenNav.nativeElement.classList.toggle('hide');
    this.hamburger.nativeElement.classList.toggle('is-active');

    // ...
  }

}
