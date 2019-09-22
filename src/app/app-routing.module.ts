import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HOME_ROUTES} from './views/home/home.routes';
import {LIST_POKEMON_ROUTES} from './views/list-pokemon/list-pokemon.routes';


const routes: Routes = [

    ...HOME_ROUTES,
    ...LIST_POKEMON_ROUTES
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
