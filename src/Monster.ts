import { SimpleFighter } from './Fighter';

class Monster implements SimpleFighter {
  private _lifePoints: number;
  private _strength: number;
  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }

  get lifePoints() { return this._lifePoints; }
  get strength() { return this._strength; }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this.strength);
  }

  receiveDamage(attackPoints: number): number {
    const damage = this._lifePoints - attackPoints;
    if (damage < 1) {
      this._lifePoints = -1;
      return this.lifePoints;
    }
    this._lifePoints -= damage;
    return this.lifePoints;
  }
}

export default Monster;