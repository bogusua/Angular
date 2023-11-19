import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageOneComponent} from "./page-one/page-one.component";
import {PageTwoComponent} from "./page-two/page-two.component";
import {PageThreeComponent} from "./page-three/page-three.component";
import {SliderComponent} from "./slider/slider.component";

const routes: Routes = [
  {path: '', component: SliderComponent},
  {path: 'page-one', component: PageOneComponent },
  {path: 'page-two', component: PageTwoComponent },
  {path: 'page-three', component: PageThreeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
