import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {

  recipes: Recipe[] = [];

  constructor(private recipeService: RecipesService) { }

  ngOnInit() {
    // un seul fois le moment creation
    // this.recipes = this.recipeService.getAllRecipes();
  }
  // a chaque foi il execute
  ionViewWillEnter(){
    this.recipes = this.recipeService.getAllRecipes () ;
    }



}