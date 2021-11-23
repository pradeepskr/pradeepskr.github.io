import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  img : string | undefined;
  constructor() { 
    this.img = 'assets/1.jpg'
  }

  ngOnInit(): void {
  }

}
