import Race from './Race';

class Orc extends Race {
  static instances = 0;
  _maxLifePoints = 74;
  constructor(
    name: string,
    dexterity: number,
  ) {
    super(name, dexterity);
    Orc.instances += 1;
  }

  get maxLifePoints(): number { return this._maxLifePoints; }

  static createdRacesInstances() { return this.instances; }
}

export default Orc;