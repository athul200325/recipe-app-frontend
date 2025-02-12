import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { ApiService } from '../services/api.service';
import { SearchPipe } from '../pipes/search.pipe';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [HeaderComponent, SearchPipe, FormsModule, NgxPaginationModule],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent implements OnInit {
  
  allRecipes: any[] = []; // Stores filtered recipes
  allDummyRecipes: any[] = []; // Stores original list of recipes
  searchKey: string = "";
  currentPage: number = 1;
  itemsPerPage: number = 6;
  p:number = 1;


  constructor(private api: ApiService, private router: Router) {}

  ngOnInit() {
    this.getAllRecipes();
  }

  getAllRecipes() {
    this.api.getAllRecipesAPI().subscribe((res: any) => {
      this.allDummyRecipes = res;
      this.allRecipes = [...this.allDummyRecipes]; // Ensure deep copy
    });
  }

  filterRecipes(recipeType: string, recipeName: string) {
    if (!recipeName) {
      this.allRecipes = [...this.allDummyRecipes];
    } else {
      this.allRecipes = this.allDummyRecipes.filter((item: any) =>
        item[recipeType].toLowerCase().includes(recipeName.toLowerCase())
      );
    }
    this.currentPage = 1; // Reset pagination after filter
  }

  clearFilter() {
    this.searchKey = "";
    this.allRecipes = [...this.allDummyRecipes];
    this.currentPage = 1;
  }

  viewRecipes(recipeId: string) {
    if (sessionStorage.getItem("token")) {
      this.router.navigateByUrl(`recipe/${recipeId}/view`);
    } else {
      alert("Please login to view recipes.");
    }
  }
}
