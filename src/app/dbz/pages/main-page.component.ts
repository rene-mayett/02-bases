import { Component} from '@angular/core';
import { DBZService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  constructor(private dbzservice:DBZService) {}

  get characters(): Character[]{
    return[...this.dbzservice.characters]
  }

  onDeleteCharacter(id:string):void{
    this.dbzservice.deleteCharacterByID(id);
  }

  onNewCharacter(character:Character):void{
    this.dbzservice.addNewCharacter(character)
  }
}
