import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SkillsComponent } from './Mycomponent/skills/skills.component';
import { HeroComponent } from './Mycomponent/hero/hero.component';
import { InternComponent } from './Mycomponent/intern/intern.component';
import { PorComponent } from './Mycomponent/por/por.component';
import { AboutComponent } from './Mycomponent/about/about.component';
import { CvComponent } from './Mycomponent/cv/cv.component';
import { SkexComponent } from './Mycomponent/skex/skex.component';
import { FormsModule } from '@angular/forms';
import { BasicComponent } from './Mycomponent/basic/basic.component';
import { EduComponent } from './Mycomponent/edu/edu.component';
import { ProjectComponent } from './Mycomponent/project/project.component';
import { CourseComponent } from './Mycomponent/course/course.component';
import { AwardComponent } from './Mycomponent/award/award.component';
import { ExtraComponent } from './Mycomponent/extra/extra.component';
import { PrsComponent } from './prs/prs.component';
import { HttpClientModule } from '@angular/common/http';
import { SocialLoginModule, SocialAuthServiceConfig, FacebookLoginProvider } from 'angularx-social-login';
import { GoogleLoginProvider } from 'angularx-social-login';
import { AngularFireModule } from '@angular/fire';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { ReplyComponent } from './reply/reply.component';
import { VideoComponent } from './video/video.component';
@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    HeroComponent,
    InternComponent,
    PorComponent,
    AboutComponent,
    CvComponent,
    SkexComponent,
    BasicComponent,
    EduComponent,
    ProjectComponent,
    CourseComponent,
    AwardComponent,
    ExtraComponent,
    PrsComponent,
    ReplyComponent,
    VideoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocialLoginModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCUVzx1RL90aYB3XH_zikUay2V2sba7rZ8",
      authDomain: "bemrr-a703e.firebaseapp.com",
      databaseURL: "https://bemrr-a703e-default-rtdb.firebaseio.com",
      projectId: "bemrr-a703e",
      storageBucket: "bemrr-a703e.appspot.com",
      messagingSenderId: "380122738129",
      appId: "1:380122738129:web:90e68600b771ba6e5104f0",
      measurementId: "G-HKEL1QPLT0"
    }),
    AngularFireDatabaseModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              //'643877259176-p0spqj9vn6m1gbc660an51hpq4s5ihn9.apps.googleusercontent.com'
              '643877259176-ki69287lf4l82a23idrd27au5mki1fhg.apps.googleusercontent.com'
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            //provider: new FacebookLoginProvider('3188504531379962')
            provider: new FacebookLoginProvider('319334346589027')
          }
        ]
      } as SocialAuthServiceConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
