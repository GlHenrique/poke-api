import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {ParticlesModule} from 'angular-particle';
import {ApiService} from '../../core/api.service';

@NgModule({
    declarations: [HomeComponent],
    imports: [
        CommonModule,
        RouterModule,
        HttpClientModule,
        ParticlesModule
    ],
    exports: [HttpClientModule],
    providers: [ApiService],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomeModule {
}
