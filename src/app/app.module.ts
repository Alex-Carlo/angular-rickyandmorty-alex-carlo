import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CharacterCardComponent } from './shared/character-card/character-card.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { HttpClientModule} from "@angular/common/http";
import { CharacterEffects } from './state/characters/character.effects';
import { REDUCER_KEY } from './state/app.state';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HomeComponent } from './pages/home/home.component';
import { ListCharactersComponent } from './pages/list-characters/list-characters.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { OneCharacterComponent } from './pages/one-character/one-character.component';
import { MatListModule } from '@angular/material/list';
import { EpisodeComponent } from './pages/episode/episode.component';
@NgModule({
  declarations: [
    AppComponent,
    CharacterCardComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    ListCharactersComponent,
    OneCharacterComponent,
    EpisodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatIconModule,
    MatPaginatorModule,
    MatMenuModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    StoreModule.forRoot(REDUCER_KEY),
    StoreDevtoolsModule.instrument({ name:'TEST' }),
    EffectsModule.forRoot([CharacterEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
