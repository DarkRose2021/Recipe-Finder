import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/recipe';
import { ApiCallsService } from '../service/api-calls.service';

@Component({
  selector: 'app-name-search',
  templateUrl: './name-search.component.html',
  styleUrls: ['./name-search.component.scss'],
})
export class NameSearchComponent implements OnInit {
  constructor(private apiCallService: ApiCallsService) {
    this.name = [];
  }

  ngOnInit(): void {}
  wasError?: boolean = false;
  name?: Recipe[];
  recipe?: Recipe;
  nameSearched?: string;

  onNameSearch() {
    this.wasError = false;
    this.apiCallService.searchByName(this.nameSearched).subscribe((resp) => {
      let data = resp as any;
      if (data['meals']) {
        this.name = [];
        for (let result of data['meals']) {
          let meal = {
            name: result.strMeal,
            img: result.strMealThumb,
            video: result.strYoutube,
            cat: result.strCategory,
            instructions: result.strInstructions,
            i1: result.strIngredient1,
            i2: result.strIngredient2,
            i3: result.strIngredient3,
            i4: result.strIngredient4,
            i5: result.strIngredient5,
            i6: result.strIngredient6,
            i7: result.strIngredient7,
            i8: result.strIngredient8,
            i9: result.strIngredient9,
            i10: result.strIngredient10,
            i11: result.strIngredient11,
            i12: result.strIngredient12,
            i13: result.strIngredient13,
            i14: result.strIngredient14,
            i15: result.strIngredient15,
            i16: result.strIngredient16,
            i17: result.strIngredient17,
            i18: result.strIngredient18,
            i19: result.strIngredient19,
            i20: result.strIngredient20,
            m1: result.strMeasure1,
            m2: result.strMeasure2,
            m3: result.strMeasure3,
            m4: result.strMeasure4,
            m5: result.strMeasure5,
            m6: result.strMeasure6,
            m7: result.strMeasure7,
            m8: result.strMeasure8,
            m9: result.strMeasure9,
            m10: result.strMeasure10,
            m11: result.strMeasure11,
            m12: result.strMeasure12,
            m13: result.strMeasure13,
            m14: result.strMeasure14,
            m15: result.strMeasure15,
            m16: result.strMeasure16,
            m17: result.strMeasure17,
            m18: result.strMeasure18,
            m19: result.strMeasure19,
            m20: result.strMeasure20,
          };
          this.name?.push(meal);
        }
        this.recipe = this.name[0];
      }else{
        this.wasError = true;
      }
    });
  }
}
