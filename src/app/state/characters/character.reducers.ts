import { createReducer, on } from '@ngrx/store';
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
}))
);

