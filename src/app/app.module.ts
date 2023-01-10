import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RandomRecipeComponent } from './random-recipe/random-recipe.component';
import { CategorySearchComponent } from './category-search/category-search.component';
import { IngredientSearchComponent } from './ingredient-search/ingredient-search.component';
import { NameSearchComponent } from './name-search/name-search.component';

@NgModule({
  declarations: [
    AppComponent,
    RandomRecipeComponent,
    CategorySearchComponent,
    IngredientSearchComponent,
    NameSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
