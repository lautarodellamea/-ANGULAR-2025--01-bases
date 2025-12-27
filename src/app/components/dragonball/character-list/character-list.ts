import { Component, input } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-list',
  templateUrl: './character-list.html',
})
export class CharacterList {
  // esta es la forma para obligar qu desde el mundo exterior me proporcionen esta info, es decir el componente padre me pase esta info, si no me la paso, me va a tirar un error
  characters = input.required<Character[]>();
  listName = input.required<string>();
}
