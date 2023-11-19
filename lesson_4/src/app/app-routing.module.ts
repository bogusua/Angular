import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DressesComponent, JacketsComponent} from "./women-clothing";
import {ShirtsComponent, PantsComponent} from "./men-clothing";
import {TShirtsComponent, PajamasComponent} from "./children-clothing";
import {DollsComponent, CarsComponent} from "./toys";
import {MilkComponent, SnacksComponent} from "./baby-food";
import {BooksComponent, PensComponent} from "./school";
import {SchoolComponent} from "./school/school.component";
import {BabyFoodComponent} from "./baby-food/baby-food.component";
import {ChildrenClothingComponent} from "./children-clothing/children-clothing.component";
import {MenClothingComponent} from "./men-clothing/men-clothing.component";
import {ToysComponent} from "./toys/toys.component";
import {WomenClothingComponent} from "./women-clothing/women-clothing.component";

const routes: Routes = [
  { path: 'women-clothing', component: WomenClothingComponent },
  { path: 'women-clothing/dresses', component: DressesComponent },
  { path: 'women-clothing/jackets', component: JacketsComponent },

  { path: 'men-clothing', component: MenClothingComponent},
  { path: 'men-clothing/shirts', component: ShirtsComponent },
  { path: 'men-clothing/pants', component: PantsComponent },

  { path: 'children-clothing', component: ChildrenClothingComponent },
  { path: 'children-clothing/t-shirts', component: TShirtsComponent },
  { path: 'children-clothing/pajamas', component: PajamasComponent },

  { path: 'toys', component: ToysComponent },
  { path: 'toys/dolls', component: DollsComponent },
  { path: 'toys/cars', component: CarsComponent },

  { path: 'baby-food', component: BabyFoodComponent },
  { path: 'baby-food/milk', component: MilkComponent },
  { path: 'baby-food/snacks', component: SnacksComponent },

  { path: 'school', component: SchoolComponent },
  { path: 'school/books', component: BooksComponent },
  { path: 'school/pens', component: PensComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
