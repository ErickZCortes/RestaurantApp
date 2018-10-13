import { Recipe } from '../recipes/recipe.model';
import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

     private recipes: Recipe[] = [
     new Recipe('Pizza1', 'This is a simply test1',
      'http://www.titospizzaandwings.com/wp-content/uploads/2016/07/3toppingpizza.jpg',
         [
             new Ingredient('bread', 2),
             new Ingredient('Chesse', 4)
         ]),
      new Recipe('Tacos5', 'This is a simply test5',
      'https://www.happycoffeemao.com/web/wp-content/uploads/2017/09/tacos.jpg',
        [
            new Ingredient('Tortilla', 2),
            new Ingredient('Carne', 3),
        ]),
  ];
  getRecipes() {
      return this.recipes.slice();
  }
}
