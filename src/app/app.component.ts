import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cv-iit-kgp';
  ImagePath: string;
  
  constructor() {
    //image location
    this.ImagePath = 'assets/pr.png'
  }
  
  ngOnInit() {
  }
  
}