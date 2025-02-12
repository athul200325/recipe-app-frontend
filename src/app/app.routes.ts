import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContactComponent } from './contact/contact.component';
import { RecipesComponent } from './recipes/recipes.component';
import { SavedRecipesComponent } from './saved-recipes/saved-recipes.component';
import { ViewRecipesComponent } from './view-recipes/view-recipes.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    // admin module route
    {path:"admin",loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule)},
    
    {path:"",component:HomeComponent},
    {path:"login",component:LoginComponent},
    {path:"register",component:RegisterComponent},
    {path:"contact",component:ContactComponent},
    {path:"about",component:AboutComponent},
    {path:"recipes",component:RecipesComponent},
    {path:"saved-recipes",component:SavedRecipesComponent},
    {path:"recipe/:id/view",component:ViewRecipesComponent}

];
