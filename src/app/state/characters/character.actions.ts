import { createAction, props } from '@ngrx/store';
import { Character } from 'src/app/core/interfaces/characters.interface';
import { Episode } from 'src/app/core/interfaces/episode.interface';


export enum CharactersActionTypes {
  loadCharacterData = `[Character] Load character`,
  loadCharacterDataSuccess = `[Character] Load character success`,
  loadCharacterDataFailed = `[Character] character failed`,
  loadOneCharacter = `[Character] Load one character`,
  loadOneCharacterSucces = `[Character] Load one character`,
  loadOneCharacterFailed = `[Character] Load one character`,
  loadEpisodeData = `[Episode] Load Episode`,
  loadEpisodeDataSuccess = `[Episode] Load Episode success`,
  loadEpisodeDataFailed = `[Episode] Episode failed`,
  loadEpisodeWithCharacter = `[Episode] Load Episode with character`,
  loadEpisodeWithCharacterSucces = `[Episode] Load Episode with character succes`,
  loadEpisodeWithCharacterFailed = `[Episode] Load Episode with character failed`
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

export const loadEpisodeData = createAction(
  CharactersActionTypes.loadEpisodeData,
  props<{ id: string }>()
);

export const loadEpisodeDataSuccess = createAction(
  CharactersActionTypes.loadEpisodeDataSuccess,
  props<{ dataEpisode: Episode }>()
);

export const loadEpisodeDataFailed = createAction(
  CharactersActionTypes.loadEpisodeDataFailed
);

export const loadEpisodeWithCharacter = createAction(
  CharactersActionTypes.loadEpisodeWithCharacter,
  props<{ id: string }>()
);

export const loadEpisodeWithCharacterSucces = createAction(
  CharactersActionTypes.loadEpisodeWithCharacterSucces,
  props<{ dataCharacter: any }>()
);

export const loadEpisodeWithCharacterFailed = createAction(
  CharactersActionTypes.loadEpisodeWithCharacterFailed
);
export const characterActions = {
  loadCharacterData,
  loadCharacterDataSuccess,
  loadCharacterDataFailed,
  loadOneCharacter,
  loadEpisodeData,
  loadEpisodeDataSuccess,
  loadEpisodeDataFailed,
  loadEpisodeWithCharacter,
  loadEpisodeWithCharacterSucces,
  loadEpisodeWithCharacterFailed
}
