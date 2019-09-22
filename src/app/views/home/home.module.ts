import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {ParticlesModule} from 'angular-particle';

@NgModule({
    declarations: [HomeComponent],
    imports: [
        CommonModule,
        RouterModule,
        HttpClientModule,
        ParticlesModule
    ]
})
export class HomeModule {
}
