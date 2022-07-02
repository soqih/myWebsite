import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import AOS from 'aos/dist/aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../../../styles/hamburgers/dist/hamburgers.css']
})
export class HomeComponent implements OnInit {

  constructor(public route: ActivatedRoute) { }
  ngOnInit(): void {
    console.log(this.route.snapshot.routeConfig.path)
  }

  
  public get language() : string {
    if(this.route.snapshot.routeConfig.path.includes('Ar') || this.route.snapshot.routeConfig.path.includes('ar')){
      return 'arabic';
    }
    return 'english'
  }
  

}
