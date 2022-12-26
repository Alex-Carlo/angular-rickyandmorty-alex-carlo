import { Character, Result } from "src/app/core/interfaces/characters.interface"
import { Episode } from "src/app/core/interfaces/episode.interface";

export const CHARACTER_FEATURE_KEY = 'characters';

export const initialCharacterState: CharacterState = {
  characterData: [],
  characterDataLoading: false,
  oneCharacter: [],
  episodeData: [],
  episodeDataLoading: false,
  dataCharacter: [],
  charactersMultiple: [],
  charactersMultipleLoading: false,
  episodeMultiple:[],
  episodeMultipleLoading: false
}

export interface CharacterState {
  characterData: any;
  characterDataLoading: boolean;
  oneCharacter: any;
  episodeData: any;
  episodeDataLoading: boolean;
  dataCharacter: any;
  charactersMultipleLoading: boolean;
  charactersMultiple: Result[];
  episodeMultipleLoading: boolean;
  episodeMultiple: Episode[];
}
