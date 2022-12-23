import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Episode } from 'src/app/core/interfaces/episode.interface';
import { characterActions } from 'src/app/state/characters/character.actions';
import { selectDataEpisode } from 'src/app/state/characters/character.selectors';

@Component({
  selector: 'app-episode',
  templateUrl: './episode.component.html',
  styleUrls: ['./episode.component.scss']
})
export class EpisodeComponent implements OnInit {
  selectDataEpisode$ = this.store$.select(selectDataEpisode);
  data:Episode;
  character: string[];
  constructor(private routing: ActivatedRoute, private store$: Store){

  }
  ngOnInit(): void {
    this.store$.dispatch(characterActions.loadEpisodeData({id: this.routing.snapshot.params['id']}));
    this.selectDataEpisode$.subscribe(data =>{
      this.data = data;
      console.log(data.characters);
      this.character = data.characters;
    });
    setTimeout(() => {
      this.character.forEach(el=>{
        this.store$.dispatch(characterActions.loadEpisodeWithCharacter({id: el}));
      });
    }, 1000);
  }

}
