import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {  TopComponent } from './top/top.component';
import {  SecondComponent } from './second/second.component';
import {  ThirdComponent } from './third/third.component';


const routes: Routes = [
  { path: '', redirectTo: '/top', pathMatch: 'full' },
  { path: 'top', component: TopComponent },
  { path: 'confirm', component: SecondComponent },
  { path: 'finish', component: ThirdComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
