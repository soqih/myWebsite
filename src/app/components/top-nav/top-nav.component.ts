import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css', '../../../styles/hamburgers/dist/hamburgers.css']
})
export class TopNavComponent implements OnInit {
  @Input() language:string
  @ViewChild("hiddenNav") hiddenNav: ElementRef;
  @ViewChild("hamburger") hamburger: ElementRef;
  constructor(public router: Router) { }
  arabic:string = "English";
  english:string = "عربي";
  ngOnInit(): void {
    
  }
  burgerClicked() {
    this.hiddenNav.nativeElement.classList.toggle('hide');
    this.hamburger.nativeElement.classList.toggle('is-active');
  }
  
  public get route() : string {
    if(this.language === 'arabic'){
      // this.router.navigate(['index/en'])
    return "/index/en"
    }
    return "/index/ar"
  }
  
  changeLanguage(){
    if(this.language === 'arabic'){
      this.router.navigate(['index/en'])
    }
    else{
      this.router.navigate(['index/ar'])

    }
  }
}
