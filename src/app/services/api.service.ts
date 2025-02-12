import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private serverUrl = 'https://recipe-app-server-oais.onrender.com';

  constructor(private http: HttpClient) { }

  private appendToken() {
    const token = sessionStorage.getItem('token');
    let headers = new HttpHeaders();
    if (token) {
      headers = headers.append('Authorization', `Bearer ${token}`);
    }
    return { headers };
  }

  getAllRecipesAPI() {
    return this.http.get(`${this.serverUrl}/api/all-recipes`);
  }

  saveTestimonialAPI(reqBody: any) {
    return this.http.post(`${this.serverUrl}/api/add-testimony`, reqBody);
  }

  registerAPI(reqBody: any) {
    return this.http.post(`${this.serverUrl}/api/register`, reqBody);
  }

  loginAPI(reqBody: any) {
    return this.http.post(`${this.serverUrl}/api/login`, reqBody);
  }

  getARecipeAPI(id: string) {
    return this.http.get(`${this.serverUrl}/api/recipes/${id}/view`, this.appendToken());
  }

  getRelatedRecipeAPI(cuisine: string) {
    return this.http.get(`${this.serverUrl}/related-recipes?cuisine=${cuisine}`, this.appendToken());
  }

  downloadRecipe(id: string, recipeDetails: any) {
    return this.http.post(`${this.serverUrl}/api/recipie/${id}/download`, recipeDetails, this.appendToken());
  }

  saveRecipeAPI(recipeDetails: any) {
    return this.http.post(`${this.serverUrl}/api/recipe/save`, recipeDetails, this.appendToken());
  }

  getSavedRecipesAPI() {
    return this.http.get(`${this.serverUrl}/api/saved-recipes`, this.appendToken());
  }

  removeSavedRecipeAPI(id: string) {
    return this.http.delete(`${this.serverUrl}/api/saved-recipes/${id}/remove`, this.appendToken());
  }

  getAllUsers() {
    return this.http.get(`${this.serverUrl}/api/admin/all-users`, this.appendToken());
  }

  getAllDownloads() {
    return this.http.get(`${this.serverUrl}/api/admin/all-downloads`, this.appendToken());
  }

  getAllTestimoniesAPI() {
    return this.http.get(`${this.serverUrl}/api/all-testimonys`, this.appendToken());
  }

  updateTestimonyAPI(id: string, status: string) {
    return this.http.put(`${this.serverUrl}/api/testimonies/${id}`, { status }, this.appendToken());
  }

  addRecipeAPI(recipeDetails: any) {
    return this.http.post(`${this.serverUrl}/api/add-recipe`, recipeDetails, this.appendToken());
  }
}
