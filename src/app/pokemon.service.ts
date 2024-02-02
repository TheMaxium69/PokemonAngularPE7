import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {PokemonInterface} from "./pokemon.interface";
import {MessageApiInterface} from "./message-api.interface";
import {AppComponent} from "./app.component";
import {PokemonListComponent} from "./pokemon-list/pokemon-list.component";

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private connexion: HttpClient) { }


  // Recupere tout les pokémons
  getPokemonAll():Observable<PokemonInterface[]>{
    return this.connexion.get<PokemonInterface[]>("http://vps204.tyrolium.fr/apiPokemon/index.php?controller=pokemon&task=getAll")
  }


  // Recupere UN pokémon
  getPokemonOneById(pokemonId: number):Observable<PokemonInterface>{
    return this.connexion.get<PokemonInterface>("http://vps204.tyrolium.fr/apiPokemon/index.php?controller=pokemon&task=getById&id=" + pokemonId);
  }


  // Créer un pokémon
  postPokemon(pokemonACreer: PokemonInterface):Observable<MessageApiInterface>{


    let userApi:string = "Maxime";

    //Encodé l'object pokemon (d'angular) en un object JSON à envoyé a une API
    const body = JSON.stringify(pokemonACreer);

    //Construction du CORS (des options du paquet)
    const header = { 'content-type': 'application/x-www-form-urlencoded' }

    return this.connexion.post<MessageApiInterface>('http://vps204.tyrolium.fr/apiPokemon/index.php?controller=pokemon&task=createPokemon&userApi=' + userApi, body, {'headers': header});


  }

  // Supprimé un pokémon
  deletePokemon(idPokemon: number):Observable<MessageApiInterface>{

    let userApi:string = "Maxime";

    return this.connexion.get<MessageApiInterface>("http://vps204.tyrolium.fr/apiPokemon/index.php?controller=pokemon&task=deletePokemon&userApi="+ userApi + "&id=" + idPokemon)
    //return this.connexion.delete()

  }


}
