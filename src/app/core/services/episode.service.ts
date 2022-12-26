import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environment/environment';
import { Episode } from '../interfaces/episode.interface';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {
  private url = environment.URL;
  constructor(private http: HttpClient) { }

  public getOneEpisode(id){
    return this.http.get<Episode>(`${this.url}/episode/${id}`).pipe(map(this.transforDataEpisode));
  }

  public getMultipleEpisodes(episodesId: string[]):Observable<Episode[]> {
    const episode = episodesId.toString();
    return this.http.get<Episode[]>(`${this.url}/episode/${episode}`);
  }

  private transforDataEpisode(res:Episode):Episode{
    const transform: Episode = res;
    const result  = res.characters.map(el => {
      const character = el.split('/');
      const id = character[character.length-1];
      return id
    });
    return {
      id: transform.id,
      name: transform.name,
      air_date: transform.air_date,
      episode: transform.episode,
      characters: result,
      url: transform.url,
      created: transform.created
    }
  }
}

