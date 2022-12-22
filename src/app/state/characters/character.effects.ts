import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CharacterService } from 'src/app/core/services/character.service';
import { from, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { characterActions } from './character.actions';

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
constructor(private actions$: Actions, private serviceCharacter: CharacterService){

}
}
