import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CardsContainerComponent} from "./cards-container/cards-container.component";

const routes: Routes = [
  {path: '', component: CardsContainerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
