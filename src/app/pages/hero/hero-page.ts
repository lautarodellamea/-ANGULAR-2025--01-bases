import { UpperCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  templateUrl: './hero-page.html',
  imports: [UpperCasePipe],
})
export class HeroPage {
  protected readonly title = signal('hero');

  protected name = signal('ironman');
  protected age = signal(45);

  protected getHeroDescription(): string {
    return `${this.name()} - ${this.age()}`;
  }

  protected changeHero(): void {
    this.name.set('spiderman');
  }

  protected changeAge(): void {
    this.age.set(20);
  }

  protected resetForm(): void {
    this.name.set('ironman');
    this.age.set(45);
  }
}
