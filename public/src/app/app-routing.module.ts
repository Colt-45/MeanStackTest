import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActionsComponent } from "./actions/actions.component"
import { NewComponent } from "./new/new.component"
import { EditComponent } from "./edit/edit.component"
import { HomeComponent } from "./home/home.component"


const routes: Routes = [
    { path: 'home', component:HomeComponent },
    { path: 'actions', component:ActionsComponent },
    { path: 'new', component:NewComponent },
    { path: 'edit/:id', component:EditComponent },
    { path: '', pathMatch:"full", redirectTo: "/home"},
    { path: '**', component:HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
