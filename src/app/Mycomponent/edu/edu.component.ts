import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-edu',
  templateUrl: './edu.component.html',
  styleUrls: ['./edu.component.css']
})
export class EduComponent implements OnInit {
  @Input() message:string | any;
  localItem: string | any;
  dataedu: Array<{ s: string }> = [];
  degree: string | any;
  year: string | any;
  insti: string | any;
  marks: string | any;
  degree1: string | any;
  year1: string | any;
  insti1: string | any;
  marks1: string | any;
  degree2: string | any;
  year2: string | any;
  insti2: string | any;
  marks2: string | any;
  nsize: string | any;
  nfont: string | any;
  constructor() {
    this.localItem = localStorage.getItem("dataedu");
    if (this.localItem != null) {
      this.dataedu = JSON.parse(this.localItem);
      this.year = this.dataedu[0];
      this.degree = this.dataedu[1];
      this.marks = this.dataedu[2];
      this.insti = this.dataedu[3];
      this.year1 = this.dataedu[4];
      this.degree1 = this.dataedu[5];
      this.marks1 = this.dataedu[6];
      this.insti1 = this.dataedu[7];
      this.year2 = this.dataedu[8];
      this.degree2 = this.dataedu[9];
      this.marks2 = this.dataedu[10];
      this.insti2 = this.dataedu[11];
      this.nfont = this.dataedu[12];
      this.nsize = this.dataedu[13];
    }
    else{
      this.nsize= "16";
      this.nfont= "Lato";
    }
  }

  ngOnInit(): void {
  }
  onsubmit1(){
    if (this.year == null) {
      alert("Graduation year is missing in Education");
    }
    else if (this.degree == null) {
      alert("degree/exam is missing in Education")
    }
    else if (this.marks == null) {
      alert("marks No. is missing in Education")
    }
    else if (this.insti == null) {
      alert("insti is missing in Education")
    }
    else if (this.year1 == null) {
      alert("degree No. is missing in Education")
    }
    else if (this.degree1 == null) {
      alert("marks No. is missing in Education")
    }
    else if (this.marks1 == null) {
      alert("insti is missing in Education")
    }
    else if (this.year2 == null) {
      alert("degree No. is missing in Education")
    }
    else if (this.degree2 == null) {
      alert("marks No. is missing in Education")
    }
    else if (this.marks2 == null) {
      alert("insti is missing in Education")
    }
    else if (this.insti2 == null) {
      alert("degree No. is missing in Education")
    }
    else if (this.degree1 == null) {
      alert("marks No. is missing in Education")
    }
    else if (this.marks1 == null) {
      alert("insti is missing in Education")
    }
    else {
      this.dataedu[0] = this.year;
      this.dataedu[1] = this.degree;
      this.dataedu[2] = this.marks;
      this.dataedu[3] = this.insti;
      this.dataedu[4] = this.year1;
      this.dataedu[5] = this.degree1;
      this.dataedu[6] = this.marks1;
      this.dataedu[7] = this.insti1;
      this.dataedu[8] = this.year2;
      this.dataedu[9] = this.degree2;
      this.dataedu[10] = this.marks2;
      this.dataedu[11] = this.insti2;
      this.dataedu[12] = this.nfont;
      this.dataedu[13] = this.nsize;
      localStorage.setItem("dataedu", JSON.stringify(this.dataedu));
    }
  }
  changesize1(j: string) {
    this.nsize = j;
    this.dataedu[13] = this.nsize;
    localStorage.setItem("dataedu", JSON.stringify(this.dataedu));
  }
  changefont1(j: string) {
    this.nfont = j;
    this.dataedu[12] = this.nfont;
    localStorage.setItem("dataedu", JSON.stringify(this.dataedu));
  }
}