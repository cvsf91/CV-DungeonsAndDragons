import Race from './Race';

class Halfling extends Race {
  static instances = 0;
  _maxLifePoints = 60;
  constructor(
    name: string,
    dexterity: number,
  ) {
    super(name, dexterity);
    Halfling.instances += 1;
  }

  get maxLifePoints(): number { return this._maxLifePoints; }

  static createdRacesInstances() { return this.instances; }
}

export default Halfling;