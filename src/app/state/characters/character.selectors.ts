import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { CharacterState} from './character.state';

export const selectFeature = (state: AppState) => state.character;

export const selectDataCharacter = createSelector(
  selectFeature,
  (state: CharacterState) => state.characterData
);
