import {
  bug,
  dark,
  dragon,
  electric,
  fairy,
  fighting,
  fire,
  flying,
  ghost,
  grass,
  ground,
  ice,
  normal,
  poison,
  psychic,
  rock,
  steel,
  water,
} from "./constant";

export function getColor(input) {
  console.log(input);
  switch (input) {
    case "grass":
      return grass;
    case "normal":
      return normal;
    case "flying":
      return flying;
    case "fire":
      return fire;
    case "psychic":
      return psychic;
    case "water":
      return water;
    case "bug":
      return bug;
    case "electric":
      return electric;
    case "rock":
      return rock;
    case "ghost":
      return ghost;
    case "ice":
      return ice;
    case "dragon":
      return dragon;
    case "fighting":
      return fighting;
    case "dark":
      return dark;
    case "poison":
      return poison;
    case "steel":
      return steel;
    case "ground":
      return ground;
    case "fairy":
      return fairy;
    default:
      return "red";
  }
}
