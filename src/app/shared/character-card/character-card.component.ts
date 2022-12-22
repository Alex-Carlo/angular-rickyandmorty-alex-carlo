import { Input } from '@angular/core';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Character } from 'src/app/core/interfaces/characters.interface';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss']
})
export class CharacterCardComponent implements OnInit{
@Input() data: any;
constructor(){

}
  ngOnInit(): void {
    console.log(this.data);
  }
  onClick(id:number): void{
 console.log(id);
  }
}
