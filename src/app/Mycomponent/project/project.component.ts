import { stringify } from '@angular/compiler/src/util';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { project } from './project';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
  @Input() message : string | any;
  @Input() msg : string | any;
  project: project = new project();
  dataproject: any[] = [];
  localItem: string | any;
  constructor() {
    this.localItem = localStorage.getItem("dataproject");
    if (this.localItem != null) {
      this.dataproject = JSON.parse(this.localItem);
    }
  }
  @Output() checkedout : EventEmitter<string> = new EventEmitter()
  ngOnInit(): void {
    this.project; {
      heading: "";
      text1: "";
      text2: "";
      text3: "";
      text4: "";
      font: "Arial";
      size: "16";
    };
    this.dataproject.push(this.project);
  }
  ckeckbox(msg: string){
    this.checkedout.emit(msg);
  }
  addform() {
    this.project = new project();
    this.dataproject.push(this.project);
  }
  delete(skexaa: project) {
    const index = this.dataproject.indexOf(skexaa);
    if (this.dataproject.length == 1) {
      alert("this is the last element");
    }
    else {
      this.dataproject.splice(index, 1);
      localStorage.setItem("dataproject", JSON.stringify(this.dataproject))
    }
  }
  save(skexbb: project) {
    const index = this.dataproject.indexOf(skexbb);
    alert(index);
  }
  onsubmit() {
    console.log(this.dataproject);
    localStorage.setItem("dataproject", JSON.stringify(this.dataproject))
  }
  changesize(i: number, j: string) {
    this.dataproject[i].size = j;
  }
  changefont(i: number, j: string) {
    this.dataproject[i].font = j;
  }

}
