import Race from './Race';

class Elf extends Race {
  static instances = 0;
  _maxLifePoints = 99;
  constructor(
    name: string,
    dexterity: number,
  ) {
    super(name, dexterity);
    Elf.instances += 1;
  }

  get maxLifePoints(): number { return this._maxLifePoints; }

  static createdRacesInstances() { return this.instances; }
}

export default Elf;