import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Ranger extends Archetype {
  static instances = 0;
  private type: EnergyType = 'stamina';
  constructor(name: string) {
    super(name);
    Ranger.instances += 1;
  }

  get energyType(): EnergyType { return this.type; }

  static createdArchetypeInstances(): number {
    return this.instances;
  }
}

export default Ranger;