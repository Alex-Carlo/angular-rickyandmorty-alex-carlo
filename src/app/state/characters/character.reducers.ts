import { createReducer, on } from '@ngrx/store';
import { Character } from 'src/app/core/interfaces/characters.interface';
import { characterActions } from './character.actions';
import { initialCharacterState } from './character.state';

export const characterReducer = createReducer(
  initialCharacterState,
on(characterActions.loadCharacterData, (state) => ({
    ...state,
    characterDataLoading: true
})),
on(characterActions.loadCharacterDataSuccess, (state, { data }) => ({
    ...state,
    characterDataLoading: false,
    characterData: data
})),
on(characterActions.loadCharacterDataFailed, (state) => ({
    ...state,
    characterDataLoading: false
})),
on(characterActions.loadOneCharacter, (state, { oneCharacter }) => ({
  ...state,
  oneCharacter: oneCharacter
})),
on(characterActions.loadEpisodeData, (state) => ({
  ...state,
  episodeDataLoading: true
})),
on(characterActions.loadEpisodeDataSuccess, (state, { dataEpisode }) => ({
  ...state,
  episodeDataLoading: false,
  episodeData: dataEpisode
})),
on(characterActions.loadCharacterDataFailed, (state) => ({
  ...state,
  episodeDataLoading: false
})),
on(characterActions.loadEpisodeWithCharacter, (state) => ({
  ...state,
  episodeDataLoading: true
})),
on(characterActions.loadEpisodeWithCharacterSucces, (state, { dataCharacter }) => ({
  ...state,
  episodeDataLoading: false,
  dataCharacter: dataCharacter
})),
on(characterActions.loadEpisodeWithCharacterFailed, (state) => ({
  ...state,
  episodeDataLoading: false
}))
);

export function pushDataCharacter(state ,dataCharacter:Character):Character[]{
  let dataCharacterr = state.dataCharacter;
  console.log(dataCharacterr);
  return dataCharacterr;
 }


