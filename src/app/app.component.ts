import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { Character } from './core/interfaces/characters.interface';
import { characterActions } from './state/characters/character.actions';
import { selectDataCharacter, selectDataCharacterLoading, selectOneCharacter } from './state/characters/character.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  character$ = this.store$.select(selectDataCharacter);
  oneCharacter$ = this.store$.select(selectOneCharacter);
  dataCharacterLoading$ = this.store$.select(selectDataCharacterLoading);
  characterSelected:any;
  _destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(private store$: Store){
  }
  ngOnInit(): void {
    this.oneCharacter$.pipe(takeUntil(this._destroy$)).subscribe(data => {
      this.characterSelected = data;
    });
  }
  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.complete();
  }
  handlePageEvent($event){
  this.store$.dispatch(characterActions.loadCharacterData({ page: $event.pageIndex + 1 }));
  }
}
