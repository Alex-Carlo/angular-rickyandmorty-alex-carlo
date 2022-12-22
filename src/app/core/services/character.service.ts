import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { Character } from '../interfaces/characters.interface';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private url = environment.URL;
  constructor(private http: HttpClient) { }

  public getAllCharacter(page=1):Observable<Character>{
    return this.http.get<Character>(`${this.url}/character/?page=${page}`);
  }
  public getOneCharacter(){

  }



}
