import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiCallsService {

  constructor(private http: HttpClient) { }

  getRandom(){
    let url = `https://www.themealdb.com/api/json/v1/1/random.php/preview`;
    return this.http.get(url);
  }

  searchCategory(keyword?: String){
    let url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${keyword}`;
    return this.http.get(url);
  }

  allCategory(){
    let url = `https://www.themealdb.com/api/json/v1/1/categories.php`;
    return this.http.get(url);
  }

  searchIngredient(keyword?: String){
    let url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${keyword}`;
    return this.http.get(url);
  }

  searchByName(keyword?: String){
    let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`;
    return this.http.get(url);
  }
}
