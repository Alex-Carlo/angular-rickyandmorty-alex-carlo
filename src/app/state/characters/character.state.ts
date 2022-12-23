import { Character } from "src/app/core/interfaces/characters.interface"

export const CHARACTER_FEATURE_KEY = 'characters';

export const initialCharacterState: CharacterState = {
  characterData: [],
  characterDataLoading: false,
  oneCharacter: [],
  episodeData: [],
  episodeDataLoading: false,
  dataCharacter: []
}

export interface CharacterState {
  characterData: any;
  characterDataLoading: boolean;
  oneCharacter: any;
  episodeData: any;
  episodeDataLoading: boolean;
  dataCharacter: any;
}
