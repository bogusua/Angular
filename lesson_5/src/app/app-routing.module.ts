import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CardsContainerComponent} from "./cards-container/cards-container.component";
import {UnorderedListComponent} from "./unordered-list/unordered-list.component";

const routes: Routes = [
  {path: '', component: CardsContainerComponent},
  {path: 'list', component: UnorderedListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
