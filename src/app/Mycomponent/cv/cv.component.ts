import { Component, HostListener, OnInit } from '@angular/core';
import { Router, RouteReuseStrategy } from '@angular/router';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  scrWidth: any;
  scr: any;
  @HostListener('window:resize', ['$event'])
  getScreenSize(event?: any) {
    this.scrWidth = window.innerWidth;
  }
  send: string | any;
  unsend: string | any;
  datadetails: any[] = [];
  localItem: string | any;
  dproject: string | any;
  internship: string | any;
  coursework: string | any;
  por: string | any;
  awards: string | any;
  extra: string | any;
  popupWinindow: string | any;
  innerContents: string | any;
  constructor() {
    this.localItem = localStorage.getItem("datadetails");
    if (this.localItem != null) {
      this.datadetails = JSON.parse(this.localItem);
      this.dproject = this.datadetails[0];
      this.internship = this.datadetails[1];
      this.coursework = this.datadetails[2];
      this.por = this.datadetails[3];
      this.awards = this.datadetails[4];
      this.extra = this.datadetails[5];
    }
    else {
      this.dproject = "";
      this.internship = "";
      this.coursework = "";
      this.por = "";
      this.awards = "";
      this.extra = "";
    }
    this.getScreenSize();
    this.send = "ok";
    this.unsend = "";
    if (this.scrWidth > 1000) {
      this.scr = "ok";
    }
    else {
      this.scr = "";
    }
  }

  ngOnInit(): void {
  }
  printToCart(printSectionId: string) {
    this.innerContents = document.getElementById(printSectionId)?.innerHTML;
    this.popupWinindow = window.open('', '_blank');
    this.popupWinindow.document.open();
    this.popupWinindow.document.write(`
  <html>
    <head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
      <title></title>
      <style>
      .name{
        width: 100px;
    }
    .c{
    float: right;}
    .text{
    text-align: center;}
    a{
    text-decoration: none;
    }
    p, h5{
    margin-bottom: 0px !important;}
    .border{
    border-color: #fff !important;
    border-top: 1px solid #000 !important;
    border-bottom: 1px solid #000 !important;
    background-color: #eee;
    }

      </style>
    </head>
<body onload="window.print();window.close()">${this.innerContents}</body>
  </html>`
    );
    this.popupWinindow.document.close();
  }
  check(s: string) {
    if (s != "") {
      this.datadetails[0] = "";
    }
    else {
      this.datadetails[0] = "ok";
    }
    this.dproject = this.datadetails[0];
    localStorage.setItem("datadetails", JSON.stringify(this.datadetails));
  }
  check1(s: string) {
    if (s != "") {
      this.datadetails[1] = "";
    }
    else {
      this.datadetails[1] = "ok";
    }
    this.internship = this.datadetails[1];
    localStorage.setItem("datadetails", JSON.stringify(this.datadetails));
  }
  check2(s: string) {
    if (s != "") {
      this.datadetails[2] = "";
    }
    else {
      this.datadetails[2] = "ok";
    }
    this.internship = this.datadetails[2];
    localStorage.setItem("datadetails", JSON.stringify(this.datadetails));
  }
  check3(s: string) {
    if (s != "") {
      this.datadetails[3] = "";
    }
    else {
      this.datadetails[3] = "ok";
    }
    this.internship = this.datadetails[3];
    localStorage.setItem("datadetails", JSON.stringify(this.datadetails));
  }
  check4(s: string) {
    if (s != "") {
      this.datadetails[4] = "";
    }
    else {
      this.datadetails[4] = "ok";
    }
    this.internship = this.datadetails[4];
    localStorage.setItem("datadetails", JSON.stringify(this.datadetails));
  }
  check5(s: string) {
    if (s != "") {
      this.datadetails[5] = "";
    }
    else {
      this.datadetails[5] = "ok";
    }
    this.internship = this.datadetails[5];
    localStorage.setItem("datadetails", JSON.stringify(this.datadetails));
  }
  Refresh() {
    window.location.reload();
  }
}
