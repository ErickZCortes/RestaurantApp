import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { IngredientsService } from '../../services/Ingredients.service';
import { Ingredient } from '../../shared/ingredient.model';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  //  @ViewChild('nameInput') nameInputRef: ElementRef;
  // @ViewChild('amountInput') amountInpuntRef: ElementRef;
  private subscription: Subscription;
  editedItem: Ingredient;
  @ViewChild('f') slForm: NgForm;
  editMode = false;
  indexEditedItem: number;
  constructor(private ingredientsService: IngredientsService) { }

  ngOnInit() {
    this.subscription = this.ingredientsService.startedEditing.subscribe((index: number) => {
      this.indexEditedItem = index;
      this.editedItem = this.ingredientsService.getIngredient(index); this.editMode = true;
      this.slForm.setValue({
        name: this.editedItem.name, amount: this.editedItem.amount
      });
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onAddItem(form: NgForm) {
    // const name = this.nameInputRef.nativeElement.value;
    // const amount = this.amountInpuntRef.nativeElement.value;
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);

    if (this.editMode) {
      this.ingredientsService.updateIngredient(this.indexEditedItem, newIngredient);
    } else {
      this.ingredientsService.addIngredient(newIngredient);
    }
    this.editMode = false;
    this.clear();
  }
  onDelete() {
    this.ingredientsService.onDelete(this.indexEditedItem);
    this.clear();
  }
  clear() {
    this.slForm.reset();
  }
}
