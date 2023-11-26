import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AlbumsComponent} from "./components/albums/albums.component";
import {FitnessComponent} from "./components/fitness/fitness.component";

const routes: Routes = [
  {path: '', component: AlbumsComponent},
  {path: 'fitness', component: FitnessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
