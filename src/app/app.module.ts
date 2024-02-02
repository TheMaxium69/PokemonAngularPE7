import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PagePokemonComponent } from './page.pokemon/page.pokemon.component';
import { PageCreateComponent } from './page.create/page.create.component';
import { FormulairePokemonComponent } from './formulaire-pokemon/formulaire-pokemon.component';
import { FooterComponent } from './footer/footer.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PageHomeComponent } from './page.home/page.home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PagePokemonComponent,
    PageCreateComponent,
    FormulairePokemonComponent,
    FooterComponent,
    PokemonListComponent,
    PageHomeComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        AppRoutingModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
