import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListComponent} from "./list/list.component";
import {PipeExampleComponent} from "./pipe-example/pipe-example.component";

const routes: Routes = [
  {path: '', component: ListComponent},
  {path: 'pipe-example', component: PipeExampleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
