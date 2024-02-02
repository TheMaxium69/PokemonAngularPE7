import {Component, OnInit} from '@angular/core';
import {PokemonInterface} from "../pokemon.interface";
import {PokemonService} from "../pokemon.service";

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit{

  pokemonAll:PokemonInterface[]|undefined;
  pokemonSelected:PokemonInterface|undefined;
  MessageAAfficher:string|undefined;

  constructor(private pokemonService:PokemonService) { }

  ngOnInit() {

    this.pokemonService.getPokemonAll().subscribe(pokemons => {
      this.pokemonAll = pokemons;
      // console.table(this.pokemonAll);
    });

  }

  showPokemonOne(pokemonId: number){

    this.pokemonService.getPokemonOneById(pokemonId).subscribe( pokemonById => {
      this.pokemonSelected = undefined;
      this.pokemonSelected = pokemonById;
      //console.log(this.pokemonSelected);
    });

  }

  deletePokemonOne(pokemonId: number, index:number){



    this.pokemonService.deletePokemon(pokemonId).subscribe( request => {

      if (request.true == "Delete pokemon succefuly"){

        // C'est suprimé
        console.log("c'est supprimé")


        //Suppression sur l'interface graphique (angular)
        console.log(index);
        this.pokemonAll?.splice(index, 1);


        // Messsage a Afficher
        this.MessageAAfficher = "le Messsage est bien supprimé";


      }
      if (request.true == "Pokemon Invalide"){

        // Pokemon existe pas
        console.log("pokemen n'existe pas")

// Messsage a Afficher
        this.MessageAAfficher = "Le Pokémon y marche pas";

      }

      if (request.true == "No have permission"){

        // j'ai pas les persmission
        console.log("je n'ai pas les permissions")


// Messsage a Afficher
        this.MessageAAfficher = "Tu n'a pas le droit gentil personne !";


      }


    });

  }



}
