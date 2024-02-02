import { Component } from '@angular/core';
import {PokemonService} from "../pokemon.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-formulaire-pokemon',
  templateUrl: './formulaire-pokemon.component.html',
  styleUrls: ['./formulaire-pokemon.component.css']
})
export class FormulairePokemonComponent {

  constructor(private pokemonService: PokemonService) { }


  onSubmit(form: NgForm){

    this.pokemonService.postPokemon(form.value).subscribe(reponse =>{
      console.log(reponse);
    });

    // recupere le formulaire

  }

}
