import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Router } from '@angular/router';
import { SocialAuthService } from 'angularx-social-login';

@Component({
  selector: 'app-reply',
  templateUrl: './reply.component.html',
  styleUrls: ['./reply.component.css']
})
export class ReplyComponent implements OnInit {
  islogin: boolean = false;
  userDetails: any;
  empList: Array<{ name: string, id: number, photo: string, email: string }> = [];
  msgList: Array<{ msg: string, id: number, var: number, name: string }> = [];
  msgList1: Array<{ msg: string, id: number, var: number, name: string }> = [];
  isload: boolean = true;
  isload1: boolean = true;
  myScrollContainer: any;
  msg: string = "";
  idsss :number | any;
  constructor(
    private router: Router,
    private authService: SocialAuthService,
    private db: AngularFireDatabase,
  ) { }

  ngOnInit(): void {
    const storage = localStorage.getItem('google-sign');
    if (storage) {
      this.islogin = true;
      this.userDetails = JSON.parse(storage);
      if (this.userDetails.email != "pradeepskr723@gmail.com") {
        this.router.navigate(['/']);
      }
      else {
        const ref = this.db.database.ref().child('userdetails');
        this.empList = [];
        ref.once('value', (snapshot) => {
          snapshot.forEach((childSnapshot) => {
            var name = childSnapshot.val()['name'];
            var id = childSnapshot.val()['id'];
            var photo = childSnapshot.val()['photoUrl'];
            var email = childSnapshot.val()['email'];
            this.empList.push({ name: name, id: id, photo: photo, email: email });
            console.log(this.empList);
          });
        });
      }
    }
    else {
      this.islogin = false;
      this.router.navigate(['/']);
    }
  }
  showchat(ids: number) {
    if (this.islogin) {
      let idss = ids + "";
      this.idsss=idss;
      const ref = this.db.database.ref().child('msg').child(idss);
      this.msgList = [];
      ref.once('value', (snapshot) => {
        snapshot.forEach((childSnapshot) => {
          var msg = childSnapshot.val()['msg'];
          var id = childSnapshot.val()['id'];
          var va = childSnapshot.val()['var'];
          var nam = childSnapshot.val()['name'];
          this.msgList.push({ msg: msg, id: id, var: va, name: nam });
          msg = "";
          id = '';
          va = "";
          nam = '';
        });
      });
    }
    this.startTimer(ids);
  }
  startTimer(id: number) {
    let intervalId = setInterval(() => {
      this.showchat(id);
    }, 10000)
  }
  load() {
    this.isload = false;
  }
  load1() {
    this.isload1 = false;
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }
  submit() {
    if (this.msg != "") {
      var s = this.idsss;
      var date = new Date;
      var d = date.toLocaleDateString();
      var c = date.toLocaleTimeString();
      this.db.database.ref().child('msg').child(s).push({
        msg: this.msg,
        id: this.userDetails.id,
        var: 0,
        date: d,
        time: c,
        name: this.userDetails.name
      });
      this.msgList.push({ msg: this.msg, id: this.userDetails.id, var: 0, name: this.userDetails.name });
      this.msg = "";
    }
    else {
      alert("message is empty");
    }
  }

}
