import { Component, OnChanges, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  homeUrl:boolean = false;

 constructor(private router: Router){
  
 }

 ngOnInit(): void {
    this.currentRoute();
 }


  currentRoute(){
   this.router.events.subscribe((route:any)=>{
      if(route.url !== undefined && route.url =="/" ){
          this.homeUrl = true;
      }
   });
 }


}