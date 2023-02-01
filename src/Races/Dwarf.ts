import Race from './Race';

class Dwarf extends Race {
  static instances = 0;
  _maxLifePoints = 80;
  constructor(
    name: string,
    dexterity: number,
  ) {
    super(name, dexterity);
    Dwarf.instances += 1;
  }

  get maxLifePoints(): number { return this._maxLifePoints; }

  static createdRacesInstances() { return this.instances; }
}

export default Dwarf;