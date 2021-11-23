import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { skex } from './../cv/text';
@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  skex: skex = new skex();
  datacourse: any[] = [];
  localItem: string | any;
  @Input() message : string |any;
  @Input() msg : string | any;
  @Output() checkedout : EventEmitter<string> = new EventEmitter();
  constructor() {
    this.localItem = localStorage.getItem("datacourse");
    if (this.localItem != null) {
      this.datacourse = JSON.parse(this.localItem);
    }
  }
  ckeckbox(msg: string){
    this.checkedout.emit(msg);
  }
  ngOnInit(): void {
    this.skex; {
      heading: "";
      text: "";
      font: "Arial";
      size: "16";
    };
    this.datacourse.push(this.skex);
  }
  addform() {
    this.skex = new skex();
    this.datacourse.push(this.skex);
  }
  delete(skexaa: skex) {
    const index = this.datacourse.indexOf(skexaa);
    if (this.datacourse.length == 1) {
      alert("this is the last element");
    }
    else {
      this.datacourse.splice(index, 1);
      localStorage.setItem("datacourse", JSON.stringify(this.datacourse))
    }
  }
  save(skexbb: skex) {
    const index = this.datacourse.indexOf(skexbb);
    alert(index);
  }
  onsubmit() {
    console.log(this.datacourse);
    localStorage.setItem("datacourse", JSON.stringify(this.datacourse))
  }
  changesize(i: number, j: string) {
    this.datacourse[i].size = j;
  }
  changefont(i: number, j: string) {
    this.datacourse[i].font = j;
  }

}
