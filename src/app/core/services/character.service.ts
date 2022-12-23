import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { Character } from '../interfaces/characters.interface';

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
  public getOneCharacter(id){
    return this.http.get<Character>(`${this.url}/character/${id}`);
  }
  private transforDataCharacter(res:Character):Character{
    const transform: Character =  res;
    const result = transform.results.map(el=>{
      const idEpi = el.episode.map(ep => {
        const epi = ep.split('/');
        const id = epi[5];
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
}
