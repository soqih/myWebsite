import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css', '../../../styles/hamburgers/dist/hamburgers.css']
})
export class TopNavComponent implements OnInit {

  @ViewChild("hiddenNav") hiddenNav: ElementRef;
  @ViewChild("hamburger") hamburger: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }
  burgerClicked() {
    this.hiddenNav.nativeElement.classList.toggle('hide');
    this.hamburger.nativeElement.classList.toggle('is-active');
  }
}
