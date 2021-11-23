import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { extra } from './extra';
@Component({
  selector: 'app-extra',
  templateUrl: './extra.component.html',
  styleUrls: ['./extra.component.css']
})
export class ExtraComponent implements OnInit {

  extra: extra = new extra();
  dataextra: any[] = [];
  localItem: string | any;
  constructor() {
    this.localItem = localStorage.getItem("dataextra");
    if (this.localItem != null) {
      this.dataextra = JSON.parse(this.localItem);
    }
  }
  @Input() message : string |any;
  @Input() msg : string | any;
  @Output() checkedout : EventEmitter<string> = new EventEmitter();
  ngOnInit(): void {
    this.extra; {
      heading: "";
      text: "";
      font: "Arial";
      size: "16";
    };
    this.dataextra.push(this.extra);
  }
  ckeckbox(msg: string){
    this.checkedout.emit(msg); 
  }
  addform() {
    this.extra = new extra();
    this.dataextra.push(this.extra);
  }
  delete(extraaa: extra) {
    const index = this.dataextra.indexOf(extraaa);
    if (this.dataextra.length == 1) {
      alert("this is the last element");
    }
    else {
      this.dataextra.splice(index, 1);
      localStorage.setItem("dataextra", JSON.stringify(this.dataextra))
    }
  }
  save(extrabb: extra) {
    const index = this.dataextra.indexOf(extrabb);
    alert(index);
  }
  onsubmit() {
    console.log(this.dataextra);
    localStorage.setItem("dataextra", JSON.stringify(this.dataextra))
  }
  changesize(i: number, j: string) {
    this.dataextra[i].size = j;
  }
  changefont(i: number, j: string) {
    this.dataextra[i].font = j;
  }

}
