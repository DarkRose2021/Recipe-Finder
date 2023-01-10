import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RandomRecipeComponent } from './random-recipe/random-recipe.component';
import { IngredientSearchComponent } from './ingredient-search/ingredient-search.component';
import { CategorySearchComponent } from './category-search/category-search.component';
import { NameSearchComponent } from './name-search/name-search.component';

const routes: Routes = [
  {path: 'app-component', component: AppComponent},
  {path: 'Random-component', component: RandomRecipeComponent},
  {path: 'Ingredient-component', component: IngredientSearchComponent},
  {path: 'Category-component', component: CategorySearchComponent},
  {path: 'Name-component', component: NameSearchComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
