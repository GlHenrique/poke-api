import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {ListPokemonModule} from './views/list-pokemon/list-pokemon.module';
import {HomeModule} from './views/home/home.module';
import {ApiService} from './core/api.service';

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
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
