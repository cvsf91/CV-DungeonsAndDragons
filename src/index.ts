import { Necromancer, Warrior } from './Archetypes';
import Battle, { PVE, PVP } from './Battle';
import Character from './Character';
import Dragon from './Dragon';
import Monster from './Monster';
import { Elf, Orc } from './Races';

const player1 = new Character(
  'Seraphine',
  7,
  new Elf('Seraphine', 7),
  new Necromancer('Seraphine'),
);

player1.levelUp();
player1.levelUp();

const player2 = new Character('Edward');
const player3 = new Character(
  'Yondu',
  9,
  new Orc('Yondu', 9),
  new Warrior('Yondu'),
);

const monster1 = new Monster();
const monster2 = new Dragon();

const pvp = new PVP(player2, player3);

const pve = new PVE(player1, [monster1, monster2]);

function runBattles(battles: Battle[]): void {
  battles.forEach((battle) => battle.fight());
}

export { player1, player2, player3, monster1, monster2, pvp, pve, runBattles };