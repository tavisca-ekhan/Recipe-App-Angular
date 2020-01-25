import { Subject } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
    ingredientsChanged = new Subject<Ingredient[]>();

    private ingredients: Ingredient[] = [
        new Ingredient('Apple', 5),
        new Ingredient('Tomato', 10)
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient(ingredient: Ingredient) {
        this.ingredients.push(ingredient);
        this.ingredientsChanged.next(this.getIngredients());
    }

    addIngredients(ingredients: Ingredient[]) {
        // 1. First Approach
        // for (let ingredient of ingredients) {
        //     this.addIngredient(ingredient);
        // }

        // 2. Better Approach
        this.ingredients.push(...ingredients);

        // Emitting the final result
        this.ingredientsChanged.next(this.getIngredients());
    }
}