import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { Character, Result } from '../interfaces/characters.interface';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private url = environment.URL;
  constructor(private http: HttpClient) { }

  public getAllCharacter(page=1):Observable<Character>{
    return this.http.get<Character>(`${this.url}/character/?page=${page}`).pipe(
      map(this.transforDataCharacter)
    );
  }

  public getMultipleCharacter(charactersId: string[]):Observable<Result[]> {
    const character = charactersId.toString();
    return this.http.get<Result[]>(`${this.url}/character/${character}`);
  }

  public getOneCharacter(id):Observable<Result>{
    return this.http.get<Result>(`${this.url}/character/${id}`).pipe(
      map(this.transforDataEpisode)
    );
  }
  private transforDataCharacter(res:Character):Character{
    const transform: Character =  res;
    const result = transform.results.map(el=>{
      const idEpi = el.episode.map(ep => {
        const epi = ep.split('/');
        const id = epi[epi.length-1];
        return id
      });
      return{
        ...el,
        episode: idEpi
      }
    });
    return {
      info: res.info,
      results: result
    }
  }

  private transforDataEpisode(res:Result):Result{
    const transform: Result = res;
    const result  = res.episode.map(el => {
      const character = el.split('/');
      const id = character[character.length-1];
      return id
    });
    return {
      id: res.id,
      name: res.name,
      status: res.status,
      species: res.species,
      type: res.type,
      gender: res.gender,
      origin: res.origin,
      location: res.location,
      image: res.image,
      episode: result,
      url: res.url,
      created: res.created,
    }
  }

}
