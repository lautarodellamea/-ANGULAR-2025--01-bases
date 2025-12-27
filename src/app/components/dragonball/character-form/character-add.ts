import { Component, output, signal } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-character-add',
  templateUrl: './character-add.html',
})
export class CharacterAdd {
  // Emite un evento cuando se agrega un nuevo personaje
  onCharacterAdded = output<Character>();

  protected setPower(value: string): void {
    this.power.set(Number(value) || 0);
  }

  protected name = signal('');
  protected power = signal<number>(0);

  protected addCharacter(): void {
    const nameValue = this.name();
    const powerValue = this.power();
    if (!nameValue || !powerValue || powerValue < 0) return;

    // Emitir el nuevo personaje al componente padre
    this.onCharacterAdded.emit({
      id: 0, // El ID será asignado por el componente padre
      name: nameValue,
      power: powerValue,
    });

    // Limpiar los campos después de agregar
    this.name.set('');
    this.power.set(0);
  }
}
