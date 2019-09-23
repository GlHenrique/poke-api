import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../core/api.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    nomes: any;
    imagens: any[] = [];
    info: any[] = [];

    constructor(private api: ApiService) {
    }

    ngOnInit(): void {
        this.getNamePokemon();
        //this.getImagesPokemon();
    }

    getNamePokemon() {
        setTimeout(() => {
            this.api.http('?offset=0&limit=50').subscribe(nomes => {
                if (nomes.results !== undefined) {
                    this.nomes = nomes.results;
                    //console.log(nomes.results);
                    for (let i = 0; i < nomes.results.length; i++) {
                        this.info.push(nomes.results[i].name)
                        console.log(this.info)
                        this.api.http(`/${this.info[i]}`).subscribe(imagens => {
                            setTimeout(() => {
                                console.log(imagens.sprites.front_default);
                                this.imagens[i] = imagens.sprites.front_default;
                            });
                        });
                    }
                }
            });
        });

    }

    getImagesPokemon() {
        this.api.http(`/25`).subscribe(imagens => {
            setTimeout(() => {
                this.imagens = imagens.sprites.front_default;
                console.log(imagens);
            });
        });
    }


}
