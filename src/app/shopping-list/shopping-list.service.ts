import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
    ingredientsChanged = new EventEmitter<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apple', 5),
        new Ingredient('Tomato', 10)
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.emit(this.getIngredients());
    }

    addIngredients(ingredients: Ingredient[]) {
        // 1. First Approach
        // for (let ingredient of ingredients) {
        //     this.addIngredient(ingredient);
        // }

        // 2. Better Approach
        this.ingredients.push(...ingredients);

        // Emitting the final result
        this.ingredientsChanged.emit(this.getIngredients());
    }
}