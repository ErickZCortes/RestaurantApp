import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../../services/recipe.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[];
  constructor(private recipeServices: RecipeService, private router: Router, private route: ActivatedRoute ) { }

  ngOnInit() {
    this.recipes = this.recipeServices.getRecipes();
  }
  onNewRecipe() {
this.router.navigate(['new'], {relativeTo: this.route});
  }

}
