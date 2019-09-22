import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../core/api.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    nomes: any[];
    imagens: any[];

    constructor(private api: ApiService) {
    }

    ngOnInit(): void {
        this.getQuantidadePokemon();
        this.getImagesPokemon();
    }

    getQuantidadePokemon() {
        this.api.http('').subscribe(nomes => {
            setTimeout(() => {
                if (nomes.results) {
                    console.log((nomes.results));
                    this.nomes = nomes.results;
                }
            });
        });
    }

    getImagesPokemon() {
        this.api.http(`1`).subscribe(imagens => {
            setTimeout(() => {
                this.imagens = imagens.sprites.front_default;
                console.log(imagens);
            });
        });
    }


}
