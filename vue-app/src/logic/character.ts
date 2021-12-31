import { Metatype } from "../definitions";
import { Character } from "../definitions/character";

const storageKey = "character";

export function getCharacter(): Character {
  const characterJson = localStorage.getItem(storageKey);

  if (characterJson) {
    return JSON.parse(characterJson);
  }

  const newCharacter: Character = {
    age: "",
    alias: "",
    attributes: {
      agility: 1,
      body: 1,
      charisma: 1,
      currentEdge: 0,
      edge: 0,
      essence: 6,
      intuition: 1,
      logic: 1,
      magic: 1,
      reaction: 1,
      strength: 1,
      willpower: 1,
    },
    heat: 0,
    height: "",
    karma: 0,
    metatype: Metatype.Human,
    name: "",
    reputation: 0,
    sex: "",
    totalKarma: 0,
    weight: "",
  };

  saveCharacter(newCharacter);
  return newCharacter;
}

export function saveCharacter(character: Character) {
  localStorage.setItem(storageKey, JSON.stringify(character));
}
