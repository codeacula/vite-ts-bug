import { Metatype } from ".";

export interface Character {
  age: string;
  alias: string;
  attributes: {
    agility: number;
    body: number;
    charisma: number;
    currentEdge: number;
    edge: number;
    essence: number;
    intuition: number;
    logic: number;
    magic: number;
    reaction: number;
    strength: number;
    willpower: number;
  };
  heat: number;
  height: string;
  karma: number;
  metatype: Metatype;
  name: string;
  reputation: number;
  sex: string;
  totalKarma: number;
  weight: string;
}
