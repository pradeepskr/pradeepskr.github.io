import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { intern } from './intern';
@Component({
  selector: 'app-intern',
  templateUrl: './intern.component.html',
  styleUrls: ['./intern.component.css']
})
export class InternComponent implements OnInit {
  @Input() message : string |any;
  @Input() msg : string | any;
  @Output() checkedout : EventEmitter<string> = new EventEmitter();
  intern: intern = new intern();
  dataintern: any[] = [];
  localItem: string | any;
  constructor() {
    this.localItem = localStorage.getItem("dataintern");
    if (this.localItem != null) {
      this.dataintern = JSON.parse(this.localItem);
    }
  }
  ngOnInit(): void {
    this.intern; {
      heading: "";
      text1: "";
      text2: "";
      text3: "";
      text4: "";
      font: "Arial";
      size: "16";
    };
    this.dataintern.push(this.intern);
  }
  ckeckbox(msg: string){
    this.checkedout.emit(msg);
  }
  addform() {
    this.intern = new intern();
    this.dataintern.push(this.intern);
  }
  delete(internaa: intern) {
    const index = this.dataintern.indexOf(internaa);
    if (this.dataintern.length == 1) {
      alert("this is the last element");
    }
    else {
      this.dataintern.splice(index, 1);
      localStorage.setItem("dataintern", JSON.stringify(this.dataintern))
    }
  }
  save(internbb: intern) {
    const index = this.dataintern.indexOf(internbb);
    alert(index);
  }
  onsubmit() {
    console.log(this.dataintern);
    localStorage.setItem("dataintern", JSON.stringify(this.dataintern))
  }
  changesize(i: number, j: string) {
    this.dataintern[i].size = j;
  }
  changefont(i: number, j: string) {
    this.dataintern[i].font = j;
  }

}
