import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, switchMap } from 'rxjs';
import { Character, Result } from './core/interfaces/characters.interface';
import { CharacterService } from './core/services/character.service';
import { characterActions } from './state/characters/character.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  character$:Observable<Character>;
  data:any;
  constructor(private store$: Store, private characterService: CharacterService ){
  }
  ngOnInit(): void {
    this.character$ = this.characterService.getAllCharacter(1);
    this.character$.subscribe(data =>{
      this.data = data.results;
    });
    this.store$.dispatch(characterActions.loadCharacterData({page:1}));
  }

}
