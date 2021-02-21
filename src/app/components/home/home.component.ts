import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../../../styles/hamburgers/dist/hamburgers.css']
})
export class HomeComponent implements OnInit {

  @ViewChild("hiddenNav") hiddenNav: ElementRef;
  @ViewChild("hamburger") hamburger: ElementRef;

  @ViewChild("logos") logos: ElementRef;
  @ViewChild("logoCard") logoCard: ElementRef;
  @ViewChild("logoCardText") logoCardText: ElementRef;

  @ViewChild("kufic") kufic: ElementRef;
  @ViewChild("kuficCard") kuficCard: ElementRef;
  @ViewChild("kuficCardText") kuficCardText: ElementRef;

  @ViewChild("other") other: ElementRef;
  @ViewChild("otherCard") otherCard: ElementRef;
  @ViewChild("otherCardText") otherCardText: ElementRef;


  constructor() { }
  ngOnInit(): void {
  }
  burgerClicked() {
    this.hiddenNav.nativeElement.classList.toggle('hide');
    this.hamburger.nativeElement.classList.toggle('is-active');

    // ...
  }
  show(a) {
    if (a === "logos") {
      this.logos.nativeElement.classList.toggle('hide');
      this.logos.nativeElement.scrollIntoView({ behavior: "smooth", block: 'center' });
      this.logoCard.nativeElement.classList.toggle('clicked');
      this.logoCardText.nativeElement.classList.toggle('white');
    }
    if (a === "kufic") {
      this.kufic.nativeElement.classList.toggle('hide');
      this.kufic.nativeElement.scrollIntoView({ behavior: "smooth", block: 'center' });
      this.kuficCard.nativeElement.classList.toggle('clicked');
      this.kuficCardText.nativeElement.classList.toggle('white');
    }
    if (a === "other") {
      this.other.nativeElement.classList.toggle('hide');
      this.other.nativeElement.scrollIntoView({ behavior: "smooth", block: 'center' });
      this.otherCard.nativeElement.classList.toggle('clicked');
      this.otherCardText.nativeElement.classList.toggle('white');
    }
    // a.nativeElement.classList.toggle('hide');
  }
}
