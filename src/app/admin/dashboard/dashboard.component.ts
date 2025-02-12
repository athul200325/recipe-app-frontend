import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'] // Fixed typo
})
export class DashboardComponent {
  allUsers: any[] = [];
  userCount: number = 0;
  allTestimony: any[] = [];
  testimonyCount: number = 0;
  allRecipes: any[] = [];
  recipeCount: number = 0;

  constructor(private api: ApiService, private router: Router) {} // Merged constructors

  ngOnInit() {
    this.getAllUsers();
    this.getAllTestimonials();
    this.getAllRecipes();
  }

  getAllUsers() {
    this.api.getAllUsers().subscribe((res: any) => {
      this.allUsers = res;
      this.userCount = this.allUsers.length;
      // console.log(this.allUsers.length);
    });
  }

  getAllTestimonials() {
    this.api.getAllTestimoniesAPI().subscribe((res: any) => {
      this.allTestimony = res;
      this.testimonyCount = this.allTestimony.length;
      // console.log(this.testimonyCount);
    });
  }

  getAllRecipes() {
    this.api.getAllRecipesAPI().subscribe((res: any) => {
      this.allRecipes = res;
      this.recipeCount = this.allRecipes.length;
      console.log(this.recipeCount);
    });
  }

  logout() {
    localStorage.clear(); // Remove token from localStorage
    sessionStorage.clear(); // If using sessionStorage
    this.router.navigate(['/']); // Redirect to login page
  }
}
