import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EpisodeComponent } from './pages/episode/episode.component';
import { HomeComponent } from './pages/home/home.component';
import { ListCharactersComponent } from './pages/list-characters/list-characters.component';
import { OneCharacterComponent } from './pages/one-character/one-character.component';

const routes: Routes = [
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'characters',
    component: ListCharactersComponent,
  },
  {
    path:'character/:id',
    component: OneCharacterComponent
  },
  {
    path:'episode/:id',
    component: EpisodeComponent
  },
  {
    path:'',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
