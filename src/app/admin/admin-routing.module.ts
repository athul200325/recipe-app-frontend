import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { ManageRecipesComponent } from './manage-recipes/manage-recipes.component';
import { UsersComponent } from './users/users.component';
import { DownloadRecipesComponent } from './download-recipes/download-recipes.component';
import { RequestComponent } from './request/request.component';

const routes: Routes = [
  // http:localhost:4200/admin/
  {path:"",component:DashboardComponent},
  {path:"all-recipes",component:RecipeListComponent},
  {path:"recipe/add",component:ManageRecipesComponent},
  {path:"all-users",component:UsersComponent},
  {path:"all-downloads",component:DownloadRecipesComponent},
  {path:"all-request",component:RequestComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
