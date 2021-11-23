import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocialAuthService, GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-prs',
  templateUrl: './prs.component.html',
  styleUrls: ['./prs.component.css']
})
export class PrsComponent implements OnInit {
  public userDetails: any;
  islogin: boolean = false;
  msg: string = "";
  isload: boolean = true;
  empList: Array<{ msg: string, id: number, var: number , name:string}> = [];
  myScrollContainer: any;
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
    }
    else {
      this.islogin = false;
    }
  }
  load() {
    this.isload = false;
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }
  showchat() {
    if (this.islogin) {
      const ref = this.db.database.ref().child('msg').child(this.userDetails.id);
      this.empList = [];
      ref.once('value', (snapshot) => {
        snapshot.forEach((childSnapshot) => {
          var msg = childSnapshot.val()['msg'];
          var id = childSnapshot.val()['id'];
          var va = childSnapshot.val()['var'];
          var nam=childSnapshot.val()['name'];
          this.empList.push({ msg: msg, id: id, var: va , name: nam});
          msg = "";
          id = '';
          va = "";
          nam='';
        });
      });
    }
    this.startTimer();
  }
  startTimer() {
    let intervalId = setInterval(() => {
      this.showchat();
    }, 10000)
  }
  signInHandle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((data) => {
      this.islogin = true;
      this.userDetails = data;
      localStorage.setItem('google-sign', JSON.stringify(data));
      this.showchat();
      this.db.database.ref().child('userdetails').child(data.id).set(data);
    });
  }
  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then((data) =>{
      this.islogin = true;
      this.userDetails = data;
      localStorage.setItem('google-sign', JSON.stringify(data));
      this.showchat();
      this.db.database.ref().child('userdetails').child(data.id).set(data);
    });
  }
  signout() {
    localStorage.removeItem('google-sign');
    this.islogin = false;
    this.userDetails = "";
  }
  submit() {
    if (this.msg != "") {
      var s = this.userDetails.id;
      var date = new Date;
      var d = date.toLocaleDateString();
      var c = date.toLocaleTimeString();
      this.db.database.ref().child('msg').child(s).push({
        msg: this.msg,
        id: this.userDetails.id,
        var: 1,
        date: d,
        time: c,
        name: this.userDetails.name
      });
      this.empList.push({ msg: this.msg, id: this.userDetails.id, var: 1, name: this.userDetails.name });
      this.msg = "";
    }
    else {
      alert("message is empty");
    }
  }
}
