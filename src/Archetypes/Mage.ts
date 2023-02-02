import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Mage extends Archetype {
  static instances = 0;
  private type: EnergyType = 'mana';
  constructor(name: string) {
    super(name);
    Mage.instances += 1;
  }

  get energyType(): EnergyType { return this.type; }

  static createdArchetypeInstances(): number {
    return this.instances;
  }
}

export default Mage;