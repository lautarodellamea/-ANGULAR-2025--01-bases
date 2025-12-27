import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';

function loadFromLocalStorage(): Character[] {
  const characters = localStorage.getItem('characters');

  // aca podriamos validadr que el localStorage sea un array de caracteres para que un usuario no pueda meter cualquier cosa.
  if (!characters) return [];

  return JSON.parse(characters);
}

// un servicio no es mas que una clase comun y corriente
// pero al ttrabajar don inyeccion de dependencias nos va a trabajar el servicio como si fuera un singleton, es decir, solo se va a crear una instancia del servicio y se va a reutilizar en toda la aplicacion, cada vez que la usemos (siempre la misma instancia).
@Injectable({ providedIn: 'root' })
export class DragonballService {
  constructor() {}

  public characters = signal<Character[]>(loadFromLocalStorage());

  public saveToLocalStorage = effect(() => {
    console.log(`characters count: ${this.characters().length}`);

    localStorage.setItem('characters', JSON.stringify(this.characters()));
  });

  public handleCharacterAdded(character: Character): void {
    this.characters.update((current) => [...current, { ...character, id: current.length + 1 }]);
  }
}
