import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { HeaderComponent } from '../header/header.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-saved-recipes',
  standalone: true,
  imports: [HeaderComponent,RouterLink],
  templateUrl: './saved-recipes.component.html',
  styleUrl: './saved-recipes.component.css'
})
export class SavedRecipesComponent {

  allRecipes:any=[]
  constructor(private api:ApiService){}

  ngOnInit(){
    this.getAllSavedRecipe()
  }

  getAllSavedRecipe(){
    this.api.getSavedRecipesAPI().subscribe((res:any)=>{
      this.allRecipes = res
      console.log(this.allRecipes);
      
    })
  }

  removeRecipe(id:any){
    this.api.removeSavedRecipeAPI(id).subscribe((res:any)=>{
      this.getAllSavedRecipe()
    })
  }

}
