import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HOME_ROUTES} from './views/home/home.routes';

export const routes: Routes = [

    ...HOME_ROUTES
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
