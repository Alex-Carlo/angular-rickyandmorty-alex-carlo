import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { characterActions } from 'src/app/state/characters/character.actions';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss']
})
export class CharacterCardComponent implements OnInit{
 @Input() data: any;
constructor(private store$: Store){

}
  ngOnInit(): void {

  }
  onClick(selectCharacter:any): void {
    this.store$.dispatch(characterActions.loadOneCharacter({oneCharacter: selectCharacter}));
  }
}
