import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Character } from './core/interfaces/characters.interface';
import { characterActions } from './state/characters/character.actions';
import { selectDataCharacter } from './state/characters/character.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  character$ = this.store$.select(selectDataCharacter);
  data:Character;
  constructor(private store$: Store){
  }
  ngOnInit(): void {
    this.store$.dispatch(characterActions.loadCharacterData({page:1}));
    this.character$.subscribe(data =>{
      this.data = data.results;
    });
  }

}
