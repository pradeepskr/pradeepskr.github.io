import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {
  @Input() message: string | undefined;
  localItem: string | any;
  dataarr: Array<{ s: string }> = [];
  roll: string | any;
  name: string | any;
  email: string | any;
  phone: string | any;
  link: string | any;
  dep : string | any;
  nsize: number | any;
  nfont: string | any;
  pfont: string | any;
  psize: string | any;
  constructor() {
    this.localItem = localStorage.getItem("dataarr");
    if (this.localItem != null) {
      this.dataarr = JSON.parse(this.localItem);
      this.name = this.dataarr[0];
      this.roll = this.dataarr[1];
      this.phone = this.dataarr[2];
      this.email = this.dataarr[3];
      this.link = this.dataarr[4];
      this.pfont = this.dataarr[5];
      this.nfont = this.dataarr[6];
      this.psize = this.dataarr[7];
      this.nsize = this.dataarr[8];
      this.dep = this.dataarr[9];
    }
  }

  ngOnInit(): void {
  }
  changesize1(j: string) {
    this.nsize = j;
  }
  changefont1(j: string) {
    this.nfont = j;
  }
  changesize2(j: string) {
    this.psize = j;
  }
  changefont2(j: string) {
    this.pfont = j;
  }
  onsubmit1() {
    if (this.name == null) {
      alert("Name is missing in Basic details");
    }
    else if (this.roll == null) {
      alert("Roll No. is missing in Basic details")
    }
    else if (this.phone == null) {
      alert("Phone No. is missing in Basic details")
    }
    else if (this.email == null) {
      alert("Email is missing in Basic details")
    }
    else {
      this.dataarr[0] = this.name;
      this.dataarr[1] = this.roll;
      this.dataarr[2] = this.phone;
      this.dataarr[3] = this.email;
      this.dataarr[4] = this.link;
      this.dataarr[5] = this.pfont;
      this.dataarr[6] = this.nfont;
      this.dataarr[7] = this.psize;
      this.dataarr[8] = this.nsize;
      this.dataarr[9] = this.dep;
      localStorage.setItem("dataarr", JSON.stringify(this.dataarr));
    }
  }

}
