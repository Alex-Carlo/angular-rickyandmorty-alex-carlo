import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { selectOneCharacter } from 'src/app/state/characters/character.selectors';

@Component({
  selector: 'app-one-character',
  templateUrl: './one-character.component.html',
  styleUrls: ['./one-character.component.scss']
})
export class OneCharacterComponent implements OnInit, OnDestroy{
  oneCharacter$ = this.store$.select(selectOneCharacter);
  characterSelected:any;
  arrayData:[];
  _destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(private store$: Store){}
  ngOnInit(): void {
    this.oneCharacter$.pipe(takeUntil(this._destroy$)).subscribe(data => {
      this.characterSelected = data;
    });
    this.arrayData = this.characterSelected.episode;
  }
  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.complete();
  }
}
