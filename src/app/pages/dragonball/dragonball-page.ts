import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball-page',
  imports: [],
  templateUrl: './dragonball-page.html',
  styleUrl: './dragonball-page.css',
})
export class DragonballPage {
  protected name = signal('');
  protected power = signal<number>(0);

  protected characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 10000 },
    { id: 2, name: 'Vegeta', power: 9000 },
    { id: 3, name: 'Krilin', power: 8000 },
    { id: 4, name: 'Piccolo', power: 7000 },
    { id: 5, name: 'Majin Boo', power: 6000 },
    { id: 6, name: 'Frieza', power: 5000 },
    { id: 7, name: 'Cell', power: 4000 },
    { id: 8, name: 'Gohan', power: 3000 },
    { id: 9, name: 'Trunks', power: 2000 },
    { id: 10, name: 'Broly', power: 300 },
  ]);

  protected setPower(value: string): void {
    this.power.set(Number(value) || 0);
  }

  protected addCharacter(): void {
    const nameValue = this.name();
    const powerValue = this.power();
    if (!nameValue || !powerValue || powerValue < 0) return;

    if (nameValue && powerValue) {
      this.characters.update((current) => [
        ...current,
        { id: current.length + 1, name: nameValue, power: powerValue },
      ]);
      // Limpiar los campos después de agregar
      this.name.set('');
      this.power.set(0);
    }
  }
}
