import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { characterActions } from 'src/app/state/characters/character.actions';
import { selectDataCharacterEpisode, selectOneCharacter } from 'src/app/state/characters/character.selectors';

@Component({
  selector: 'app-one-character',
  templateUrl: './one-character.component.html',
  styleUrls: ['./one-character.component.scss']
})
export class OneCharacterComponent implements OnInit, OnDestroy{
  oneCharacter$ = this.store$.select(selectOneCharacter);
  selectDataCharacterEpisode$ = this.store$.select(selectDataCharacterEpisode);
  characterSelected:any;
  arrayData:[];
  _destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(private store$: Store, private routing: ActivatedRoute){}
  ngOnInit(): void {
    this.store$.dispatch(characterActions.loadEpisodeWithCharacter({id: this.routing.snapshot.params['id']}));
    this.selectDataCharacterEpisode$.pipe(takeUntil(this._destroy$)).subscribe(data => {
      this.characterSelected = data;
      console.log(data);
    });

    setTimeout(() => {
      this.arrayData = this.characterSelected.episode;
    }, 300);


  }

  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.complete();
  }

  onClick(id): void{
    this.store$.dispatch(characterActions.loadEpisodeData({id: id}));
  }
}
