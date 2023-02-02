import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Necromancer extends Archetype {
  static instances = 0;
  private type: EnergyType = 'mana';
  constructor(name: string) {
    super(name);
    Necromancer.instances += 1;
  }

  get energyType(): EnergyType { return this.type; }

  static createdArchetypeInstances(): number {
    return this.instances;
  }
}

export default Necromancer;