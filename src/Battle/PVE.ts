import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  constructor(
    private fighter: Fighter,
    private monsters: SimpleFighter[],
  ) {
    super(fighter);
  }

  fight() {
    while (
      super.fight() === 1
      && this.monsters.every((monster) => monster.lifePoints !== -1)) {
      this.monsters.forEach((monster) => {
        monster.receiveDamage(this.fighter.strength);
        monster.attack(this.fighter);
      });
    }
    return super.fight();
  }
}

export default PVE;