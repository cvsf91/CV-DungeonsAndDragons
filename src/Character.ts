import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

const value = getRandomInt(1, 10);

class Character implements Fighter {
  private _archetype: Archetype;
  private maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _energy: Energy;
  //   private _dexterity: number;
  //   private _race: Race;
  constructor(
    private name: string,
    private _dexterity = value,
    private _race: Race = new Elf('Edward', value),
    archetype: Archetype = new Mage('Edward'),
  ) {
    // const rndInt = getRandomInt(1, 10);
    // this._dexterity = rndInt;
    // this._race = race || new Elf('Edward', rndInt);
    // this._dexterity = dexterity !== undefined ? dexterity : rndInt;
    // this._race = race !== undefined ? race : new Elf('Edward', rndInt);
    this._archetype = archetype;
    this.maxLifePoints = this.race.maxLifePoints / 2;
    this._lifePoints = this.maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = {
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  get race(): Race { return this._race; }
  get archetype(): Archetype { return this._archetype; }
  get lifePoints(): number { return this._lifePoints; }
  get strength(): number { return this._strength; }
  get defense(): number { return this._defense; }
  get dexterity(): number { return this._dexterity; }
  get energy(): Energy { return { ...this._energy }; }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this.defense;
    if (damage > 0) {
      if ((this.lifePoints - damage) <= 0 || (this.lifePoints - 1) <= 0) {
        this._lifePoints = -1;
        return this.lifePoints;
      }
      this._lifePoints -= damage;
      return this.lifePoints;
    }
    this._lifePoints -= 1;
    return this.lifePoints;
  }

  attack(enemy: Fighter) {
    enemy.receiveDamage(this.strength);
  }

  levelUp() {
    const lifePoints = getRandomInt(1, 10);
    this.maxLifePoints += lifePoints;
    if (this.maxLifePoints > this.race.maxLifePoints) {
      this.maxLifePoints = this.race.maxLifePoints;
      this._lifePoints += lifePoints;
      if (this._lifePoints > this.race.maxLifePoints) {
        this._lifePoints = this.race.maxLifePoints;
      }
    }
    this._lifePoints = this.maxLifePoints;
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    this._energy.amount = 10;
  }
}

export default Character;