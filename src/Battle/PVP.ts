import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  constructor(
    private fighter1: Fighter,
    private fighter2: Fighter,
  ) {
    super(fighter1);
  }

  fight() {
    while (super.fight() === 1 && this.fighter2.lifePoints !== -1) {
      this.fighter2.attack(this.fighter1);
      this.fighter1.attack(this.fighter2);
    }
    return super.fight();
  }
}

export default PVP;