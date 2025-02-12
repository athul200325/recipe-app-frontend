import { Component } from '@angular/core';
import { RecipeModel } from '../Model/RecipeModel';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-manage-recipes',
  templateUrl: './manage-recipes.component.html',
  styleUrls: ['./manage-recipes.component.css']
})
export class ManageRecipesComponent {

  recipeDetails: RecipeModel = {
    name: '',
    prepTimeMinutes: 0,
    cookTimeMinutes: 0,
    servings: 0,
    difficulty: '',
    cuisine: '',
    caloriesPerServing: 0,
    image: '',
    ingredients: [],
    instructions: [],
    mealType: []
  };

  ingredients: string[] = [];
  instructions: string[] = [];
  mealType: string[] = [];

  constructor(private api: ApiService) {}

  addIngredient(value: string) {
    if (value.trim() && !this.ingredients.includes(value)) {
      this.ingredients.push(value.trim());
    }
  }

  removeIngredient(value: string) {
    this.ingredients = this.ingredients.filter(item => item !== value);
  }

  addInstruction(value: string) {
    if (value.trim() && !this.instructions.includes(value)) {
      this.instructions.push(value.trim());
    }
  }

  removeInstruction(value: string) {
    this.instructions = this.instructions.filter(item => item !== value);
  }

  toggleMealType(event: any) {
    const value = event.target.value;
    if (event.target.checked) {
      if (!this.mealType.includes(value)) {
        this.mealType.push(value);
      }
    } else {
      this.mealType = this.mealType.filter(item => item !== value);
    }
  }

  addRecipe() {
    this.recipeDetails.ingredients = [...this.ingredients];
    this.recipeDetails.instructions = [...this.instructions];
    this.recipeDetails.mealType = [...this.mealType];

    console.log("Submitting Recipe:", this.recipeDetails);

    this.api.addRecipeAPI(this.recipeDetails).subscribe({
      next: (res: any) => {
        console.log("Recipe added successfully:", res);
        alert("Recipe Added Successfully!");
      },
      error: (err: any) => {
        console.error("Error adding recipe:", err);
        alert("Something went wrong. Please try again.");
      }
    });
  }
}
