import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DownloadRecipesComponent } from './download-recipes/download-recipes.component';
import { ManageRecipesComponent } from './manage-recipes/manage-recipes.component';
import { UsersComponent } from './users/users.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RequestComponent } from './request/request.component';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from '../pipes/search.pipe';


@NgModule({
  declarations: [
    DashboardComponent,
    DownloadRecipesComponent,
    ManageRecipesComponent,
    UsersComponent,
    RecipeListComponent,
    RequestComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    SearchPipe
  ]
})
export class AdminModule { }
