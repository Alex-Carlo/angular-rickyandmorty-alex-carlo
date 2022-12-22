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
import { characterReducer } from './state/characters/character.reducers';
import { REDUCER_KEY } from './state/app.state';

@NgModule({
  declarations: [
    AppComponent,
    CharacterCardComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(REDUCER_KEY),
    StoreDevtoolsModule.instrument({ name:'TEST' }),
    EffectsModule.forRoot([CharacterEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
