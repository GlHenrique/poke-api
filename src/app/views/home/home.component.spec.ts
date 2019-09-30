import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {HomeComponent} from './home.component';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {HttpClient} from '@angular/common/http';
import {ApiService} from '../../core/api.service';
import {ParticlesModule} from 'angular-particle';
import {RouterTestingModule} from '@angular/router/testing';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';

describe('HomeComponent', () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;
    let httpClient: HttpClient;
    let httpTestingController: HttpTestingController;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [HomeComponent],
            imports: [RouterTestingModule, HttpClientTestingModule],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        }).compileComponents();
        let apiService = TestBed.get(ApiService);
        let httpMock = TestBed.get(HttpTestingController);
    }));

    beforeEach(() => {

        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

        // httpClient = TestBed.get(HttpClient);
        // httpTestingController = TestBed.get(HttpTestingController);

    });
    it('Testar o método openModal()', async(() => {
        expect(component.openModal('pikachu')).toBeUndefined();
    }));
    it('Testar o método closeModal()', async(() => {
        expect(component.closeModal()).toBeUndefined();
    }));
    it('Teste o método getNamePokemon()', async(() => {
        expect(component.getNamePokemon('/1')).toBeUndefined();
    }));


});

