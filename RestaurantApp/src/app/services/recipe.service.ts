import { Recipe } from '../recipes/recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { IngredientsService } from './Ingredients.service';

@Injectable()
export class RecipeService {
    // recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Pizza', 'This is a simply test1',
            'http://www.titospizzaandwings.com/wp-content/uploads/2016/07/3toppingpizza.jpg',
            [
                new Ingredient('Peperonni', 8),
                new Ingredient('Chesse', 4),
                new Ingredient('Tomatoes', 2)
            ]),
        new Recipe('Tacos', 'This is a simply test2',
            'https://www.happycoffeemao.com/web/wp-content/uploads/2017/09/tacos.jpg',
            [
                new Ingredient('Tortilla', 1),
                new Ingredient('Meat', 3),
                new Ingredient('Chesse', 2)
            ]),
        new Recipe('Hamburguesa', 'This is a simply test3',
            'https://cdn4.cnet.com/img/bOPr5-hzPHxX7X7jCQt0UTADhPA=/970x0/2017/03/22/1c848061-a343-460a-a044-b07cb94e7927/if-burger.jpg',
            [
                new Ingredient('Bread', 2),
                new Ingredient('Meat', 1),
                new Ingredient('Lettuce', 1)
            ]),
        new Recipe('Hot-Dog', 'This is a simply test4',
            'https://rapidbrandsinc.com/wp-content/uploads/2017/05/Screenshot.png',
            [
                new Ingredient('Bread', 1),
                new Ingredient('Sausage', 1),
                new Ingredient('Catsup', 1)
            ]),
    ];

    constructor(private ingredientsService: IngredientsService) { }

    getRecipes() {
        return this.recipes.slice();
    }
    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.ingredientsService.addIngredients(ingredients);
    }
}
