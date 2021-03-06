import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from "./Mycomponent/about/about.component"
import { CvComponent } from "./Mycomponent/cv/cv.component"
import { PrsComponent } from './prs/prs.component';
import { ReplyComponent } from './reply/reply.component';
import { VideoComponent } from './video/video.component';

const routes: Routes = [
  { path: '', component: PrsComponent },
  { path: 'about', component:  AboutComponent},
  { path: 'cv', component:  CvComponent},
  { path: 'reply', component:  ReplyComponent},
  { path: 'video', component:  VideoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
