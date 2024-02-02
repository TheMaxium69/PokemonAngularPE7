import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PageHomeComponent} from "./page.home/page.home.component";
import {PagePokemonComponent} from "./page.pokemon/page.pokemon.component";
import {PageCreateComponent} from "./page.create/page.create.component";

const routes: Routes = [
  {path:'', component:PageHomeComponent},
  {path:'pokemon', component:PagePokemonComponent},
  {path:'pokemon/create', component:PageCreateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
