import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import {v4 as uuid} from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DBZService {

  public characters: Character [] = [{
    name:'Krilin',
    power:500,
    id: uuid()
  },{
    name:'Goku',
    power:10000,
    id: uuid()
  },{
    name:'Picoro',
    power:1800,
    id: uuid()
  }];

  addNewCharacter(character: Character):void{
    console.log('RECIBIDO EN SERVICE: ',character);
    this.characters.push(character);
  }

  deleteCharacterByID(id:string){
    console.log('ID recibido en SERVICE: ',{id});
    this.characters = this.characters.filter(x => { return x.id != id;});
    console.log('ELIMINADO');
  }

}
