import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllUsersComponent } from './all-users/all-users.component';
import { NewUserComponent } from './new-user/new-user.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path:"",component:HomeComponent},
  { path:"users",component:AllUsersComponent },
  { path:"user", component:NewUserComponent },
  {path:"users/:id",component:NewUserComponent}
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
