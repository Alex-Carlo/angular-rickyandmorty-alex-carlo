import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { Episode } from 'src/app/core/interfaces/episode.interface';
import { EpisodeService } from 'src/app/core/services/episode.service';
import { characterActions } from 'src/app/state/characters/character.actions';
import { selectDataCharacterEpisode, selectEpisodesMultiple, selectEpisodesMultipleLoading, selectOneCharacter } from 'src/app/state/characters/character.selectors';

@Component({
  selector: 'app-one-character',
  templateUrl: './one-character.component.html',
  styleUrls: ['./one-character.component.scss']
})
export class OneCharacterComponent implements OnInit, OnDestroy{
  oneCharacter$ = this.store$.select(selectOneCharacter);
  selectDataCharacterEpisode$ = this.store$.select(selectDataCharacterEpisode);
  selectEpisodesMultipleLoading$ = this.store$.select(selectEpisodesMultipleLoading);
  selectEpisodesMultiple$ = this.store$.select(selectEpisodesMultiple);

  characterSelected:any;
  arrayData:[];
  episode: Episode[];
  _destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(private store$: Store, private routing: ActivatedRoute, private ser: EpisodeService){}
  ngOnInit(): void {
    this.store$.dispatch(characterActions.loadEpisodeWithCharacter({id: this.routing.snapshot.params['id']}));

    this.selectDataCharacterEpisode$.pipe(takeUntil(this._destroy$)).subscribe(data => {
      this.characterSelected = data;
    });

    setTimeout(() => {
      this.arrayData = this.characterSelected.episode;
      this.store$.dispatch(characterActions.loadEpisodesMultiple({episodesId: this.arrayData}));
    }, 500);

    this.selectEpisodesMultiple$.pipe(takeUntil(this._destroy$)).subscribe(data => {
      this.episode = data;
    });
  }
  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.complete();
  }
  onClick(id): void{
    this.store$.dispatch(characterActions.loadEpisodeData({id: id}));
  }
}
