import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { EpisodeService } from 'src/app/core/services/episode.service';
import { characterActions } from 'src/app/state/characters/character.actions';
import { selectDataCharacter, selectDataCharacterLoading, selectOneCharacter } from 'src/app/state/characters/character.selectors';

@Component({
  selector: 'app-list-characters',
  templateUrl: './list-characters.component.html',
  styleUrls: ['./list-characters.component.scss']
})
export class ListCharactersComponent implements OnInit, OnDestroy {
  character$ = this.store$.select(selectDataCharacter);
  oneCharacter$ = this.store$.select(selectOneCharacter);
  dataCharacterLoading$ = this.store$.select(selectDataCharacterLoading);
  data:any;
  paginatoOptions:any;
  characterSelected:any;
  isLoading:boolean;
  _destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(private store$: Store, private service: EpisodeService){
  }

  ngOnInit(): void {
    this.store$.dispatch(characterActions.loadCharacterData({page:1}));
    this.character$.pipe(takeUntil(this._destroy$)).subscribe(data => {
      this.paginatoOptions = data.info;
      this.data = data.results;
    });
    this.oneCharacter$.pipe(takeUntil(this._destroy$)).subscribe(data => {
      this.characterSelected = data;
    });
    this.dataCharacterLoading$.pipe(takeUntil(this._destroy$)).subscribe((characterDataLoading) =>{
        this.isLoading = characterDataLoading;
        console.log(this.isLoading);
    });
    this.service.getOneEpisode(1).subscribe(data =>{
      console.log(data);
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
