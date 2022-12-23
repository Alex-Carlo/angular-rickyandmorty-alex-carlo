import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { CharacterState} from './character.state';

export const selectFeature = (state: AppState) => state.character;

export const selectDataCharacter = createSelector(
  selectFeature,
  (state: CharacterState) => state.characterData
);
export const selectDataCharacterLoading = createSelector(
  selectFeature,
  (state: CharacterState) => state.characterDataLoading
);

export const selectOneCharacter = createSelector(
 selectFeature,
 (state: CharacterState) => state.oneCharacter
);

export const selectDataEpisode = createSelector(
  selectFeature,
  (state: CharacterState) => state.episodeData
);

export const selectDataCharacterEpisode = createSelector(
  selectFeature,
  (state: CharacterState) => state.dataCharacter
);
