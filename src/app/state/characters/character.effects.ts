import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CharacterService } from 'src/app/core/services/character.service';
import { from, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { characterActions } from './character.actions';
import { EpisodeService } from 'src/app/core/services/episode.service';

@Injectable()
export class CharacterEffects {
  loadCharacterData$ = createEffect(() =>
    this.actions$.pipe(
        ofType(characterActions.loadCharacterData),
        switchMap((params) => {
            return from(this.serviceCharacter.getAllCharacter(params.page)).pipe(
                map((response) =>
                    characterActions.loadCharacterDataSuccess({
                      data: response
                    })
                ),
                catchError(() => of(characterActions.loadCharacterDataFailed()))
            );
        })
    )
  );
  loadEpisodeData$ = createEffect(() =>
    this.actions$.pipe(
        ofType(characterActions.loadEpisodeData),
        switchMap((params) => {
            return from(this.serviceEpisode.getOneEpisode(params.id)).pipe(
                map((response) =>
                    characterActions.loadEpisodeDataSuccess({
                      dataEpisode: response
                    })
                ),
                catchError(() => of(characterActions.loadEpisodeDataFailed()))
            );
        })
    )
  );

  loadCharacterEpisodes$ = createEffect(() =>
    this.actions$.pipe(
        ofType(characterActions.loadEpisodeWithCharacter),
        switchMap((params) => {
            return from(this.serviceCharacter.getOneCharacter(params.id)).pipe(
                map((response) =>
                    characterActions.loadEpisodeWithCharacterSucces({
                      dataCharacter: response
                    })
                ),
                catchError(() => of(characterActions.loadEpisodeWithCharacterFailed()))
            );
        })
    )
  );
  constructor(
    private actions$: Actions,
    private serviceCharacter: CharacterService,
    private serviceEpisode: EpisodeService)
  {}


}
