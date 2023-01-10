import { Component } from '@angular/core';
import { Recipe } from 'src/recipe';
import { ApiCallsService } from "./service/api-calls.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
constructor(private apiCallService: ApiCallsService){}
  title = 'Recipe Finder';
}
