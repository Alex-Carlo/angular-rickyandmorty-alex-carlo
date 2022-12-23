import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
    children: [

    ]
  },
  {
    path:'character',
    component: OneCharacterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
