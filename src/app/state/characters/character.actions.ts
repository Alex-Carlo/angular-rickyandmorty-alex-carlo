import { createAction, props } from '@ngrx/store';
import { Character, Result } from 'src/app/core/interfaces/characters.interface';
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
  loadEpisodeWithCharacterFailed = `[Episode] Load Episode with character failed`,
  loadCharacterMultiple = `[Episode] Load Character Multiple with character`,
  loadCharacterMultipleSucces = `[Episode] Load Character Multiple succes`,
  loadCharacterMultipleFailed = `[Episode] Character Multiple failed`,
  loadEpisodesMultiple = `[Character] Load Episodes Multiple with character`,
  loadEpisodesMultipleSucces = `[Character] Load Episodes Multiple succes`,
  loadEpisodesMultipleFailed = `[Character] Episodes Multiple failed`
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


export const loadCharacterMultiple = createAction(
  CharactersActionTypes.loadCharacterMultiple,
  props<{ characterId: string[] }>()
);

export const loadCharacterMultipleSucces = createAction(
  CharactersActionTypes.loadCharacterMultipleSucces,
  props<{ data: Result[] }>()
);

export const loadCharacterMultipleFailed = createAction(
  CharactersActionTypes.loadCharacterMultipleFailed
);

export const loadEpisodesMultiple = createAction(
  CharactersActionTypes.loadEpisodesMultiple,
  props<{ episodesId: string[] }>()
);

export const loadEpisodesMultipleSucces = createAction(
  CharactersActionTypes.loadEpisodesMultipleSucces,
  props<{ data: Episode[] }>()
);

export const loadEpisodesMultipleFailed = createAction(
  CharactersActionTypes.loadEpisodesMultipleSucces
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
  loadEpisodeWithCharacterFailed,
  loadCharacterMultiple,
  loadCharacterMultipleSucces,
  loadCharacterMultipleFailed,
  loadEpisodesMultiple,
  loadEpisodesMultipleSucces,
  loadEpisodesMultipleFailed
}
