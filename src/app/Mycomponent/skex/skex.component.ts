import { Component, OnInit, Input} from '@angular/core';
import { skex } from '../cv/text';

@Component({
  selector: 'app-skex',
  templateUrl: './skex.component.html',
  styleUrls: ['./skex.component.css']
})
export class SkexComponent implements OnInit {
  @Input() message : string | any;
  skex: skex = new skex();
  dataarray: any[] = [];
  localItem: string | any;
  constructor() {
    this.localItem = localStorage.getItem("data");
    if (this.localItem != null) {
      this.dataarray = JSON.parse(this.localItem);
    }
  }

  ngOnInit(): void {
    this.skex; {
      heading: "";
      text: "";
      font: "Arial";
      size: "16";
    };
    this.dataarray.push(this.skex);
  }
  addform() {
    this.skex = new skex();
    this.dataarray.push(this.skex);
  }
  delete(skexaa: skex) {
    const index = this.dataarray.indexOf(skexaa);
    if (this.dataarray.length == 1) {
      alert("this is the last element");
    }
    else {
      this.dataarray.splice(index, 1);
      localStorage.setItem("data", JSON.stringify(this.dataarray))
    }
  }
  save(skexbb: skex) {
    const index = this.dataarray.indexOf(skexbb);
    alert(index);
  }
  onsubmit() {
    console.log(this.dataarray);
    localStorage.setItem("data", JSON.stringify(this.dataarray))
  }
  changesize(i: number, j: string) {
    this.dataarray[i].size = j;
  }
  changefont(i: number, j: string) {
    this.dataarray[i].font = j;
  }
}

function input() {
  throw new Error('Function not implemented.');
}
