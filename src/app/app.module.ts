import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {ListPokemonModule} from './views/list-pokemon/list-pokemon.module';
import {HomeModule} from './views/home/home.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HomeModule,
        ListPokemonModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
