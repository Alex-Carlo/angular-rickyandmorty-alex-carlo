import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { Character, Result } from 'src/app/core/interfaces/characters.interface';
import { Episode } from 'src/app/core/interfaces/episode.interface';
import { CharacterService } from 'src/app/core/services/character.service';
import { characterActions } from 'src/app/state/characters/character.actions';
import { selectCharacterMultiple, selectCharacterMultipleLoading, selectDataEpisode } from 'src/app/state/characters/character.selectors';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss']
})
export class EpisodeComponent implements OnInit {
  selectDataEpisode$ = this.store$.select(selectDataEpisode);
  selectCharacterMultipleLoading$ = this.store$.select(selectCharacterMultipleLoading);
  selectCharacterMultiple$ = this.store$.select(selectCharacterMultiple);
  data:Episode;
  character: string[];
  characterEpisode: Result[];
  _destroy$: Subject<boolean> = new Subject<boolean>();
  isLoading:boolean;
  constructor(private routing: ActivatedRoute, private store$: Store){

  }

  ngOnInit(): void {
    this.store$.dispatch(characterActions.loadEpisodeData({id: this.routing.snapshot.params['id']}));

    this.selectDataEpisode$.pipe(takeUntil(this._destroy$)).subscribe(data =>{
      this.data = data;
      this.character = data.characters;
    });

    setTimeout(() => {
      this.store$.dispatch(characterActions.loadCharacterMultiple({characterId: this.character}));
    }, 1000);

    this.selectCharacterMultiple$.pipe(takeUntil(this._destroy$)).subscribe(data => {
      this.characterEpisode = data;
    });
    this.selectCharacterMultipleLoading$.pipe(takeUntil(this._destroy$)).subscribe((characterDataLoading) =>{
      this.isLoading = characterDataLoading;
  });
  }

  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.complete();
  }

}
