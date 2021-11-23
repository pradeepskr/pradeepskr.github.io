import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { por } from './por';
@Component({
  selector: 'app-por',
  templateUrl: './por.component.html',
  styleUrls: ['./por.component.css']
})
export class PorComponent implements OnInit {
  @Input() message : string |any;
  @Input() msg : string | any;
  @Output() checkedout : EventEmitter<string> = new EventEmitter();
  por: por = new por();
  datapor: any[] = [];
  localItem: string | any;
  constructor() {
    this.localItem = localStorage.getItem("datapor");
    if (this.localItem != null) {
      this.datapor = JSON.parse(this.localItem);
    }
  }
  ngOnInit(): void {
    this.por; {
      heading: "";
      text1: "";
      text2: "";
      text3: "";
      text4: "";
      font: "Arial";
      size: "16";
    };
    this.datapor.push(this.por);
  }
  ckeckbox(msg: string){
    this.checkedout.emit(msg);
  }
  addform() {
    this.por = new por();
    this.datapor.push(this.por);
  }
  delete(poraa: por) {
    const index = this.datapor.indexOf(poraa);
    if (this.datapor.length == 1) {
      alert("this is the last element");
    }
    else {
      this.datapor.splice(index, 1);
      localStorage.setItem("datapor", JSON.stringify(this.datapor))
    }
  }
  save(porbb: por) {
    const index = this.datapor.indexOf(porbb);
    alert(index);
  }
  onsubmit() {
    console.log(this.datapor);
    localStorage.setItem("datapor", JSON.stringify(this.datapor))
  }
  changesize(i: number, j: string) {
    this.datapor[i].size = j;
  }
  changefont(i: number, j: string) {
    this.datapor[i].font = j;
  }

}
