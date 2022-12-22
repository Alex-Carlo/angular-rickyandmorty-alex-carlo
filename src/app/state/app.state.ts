import { ActionReducerMap } from "@ngrx/store";
import { characterReducer } from "./characters/character.reducers";
import { CharacterState } from "./characters/character.state";

export interface AppState {
  character: CharacterState;
}

export const REDUCER_KEY:ActionReducerMap<AppState>  = {
  character: characterReducer
}
