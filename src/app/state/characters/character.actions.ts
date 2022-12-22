import { createAction, props } from '@ngrx/store';
import { Character } from 'src/app/core/interfaces/characters.interface';


export enum CharactersActionTypes {
  loadCharacterData = `[Character] Load character`,
  loadCharacterDataSuccess = `[Character] Load character success`,
  loadCharacterDataFailed = `[Character] character failed`,
  loadOneCharacter = `[Character] Load one character`,
}

export const loadCharacterData = createAction(
  CharactersActionTypes.loadCharacterData,
  props<{ page: number }>()
);

export const loadCharacterDataSuccess = createAction(
  CharactersActionTypes.loadCharacterDataSuccess,
  props<{ data: Character }>()
);

export const loadCharacterDataFailed = createAction(
  CharactersActionTypes.loadCharacterDataFailed
);

export const loadOneCharacter = createAction(
  CharactersActionTypes.loadOneCharacter,
  props<{ oneCharacter: Array<any> }>()
);

export const characterActions = {
  loadCharacterData,
  loadCharacterDataSuccess,
  loadCharacterDataFailed,
  loadOneCharacter
}
