import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { award } from './award';
@Component({
  selector: 'app-award',
  templateUrl: './award.component.html',
  styleUrls: ['./award.component.css']
})
export class AwardComponent implements OnInit {
  award: award = new award();
  dataaward: any[] = [];
  localItem: string | any;
  constructor() {
    this.localItem = localStorage.getItem("dataaward");
    if (this.localItem != null) {
      this.dataaward = JSON.parse(this.localItem);
    }
  }
  @Input() message : string |any;
  @Input() msg : string | any;
  @Output() checkedout : EventEmitter<string> = new EventEmitter();
  ngOnInit(): void {
    this.award; {
      heading: "";
      font: "Arial";
      size: "16";
    };
    this.dataaward.push(this.award);
  }
  addform() {
    this.award = new award();
    this.dataaward.push(this.award);
  }
  delete(awardaa: award) {
    const index = this.dataaward.indexOf(awardaa);
    if (this.dataaward.length == 1) {
      alert("this is the last element");
    }
    else {
      this.dataaward.splice(index, 1);
      localStorage.setItem("dataaward", JSON.stringify(this.dataaward))
    }
  }
  ckeckbox(msg: string){
    this.checkedout.emit(msg); 
  }
  onsubmit() {
    console.log(this.dataaward);
    localStorage.setItem("dataaward", JSON.stringify(this.dataaward))
  }
  changesize(i: number, j: string) {
    this.dataaward[i].size = j;
  }
  changefont(i: number, j: string) {
    this.dataaward[i].font = j;
  }

}
