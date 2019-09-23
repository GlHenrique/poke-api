import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ApiService} from '../../core/api.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    nomes: any;
    imagens: any[] = [];
    info: any;

    @ViewChild('myBtn', {static: false}) myBtn: ElementRef;
    @ViewChild('myModal', {static: false}) myModal: ElementRef;
    @ViewChild('close', {static: false}) close: ElementRef;

    constructor(private api: ApiService) {
    }

    ngOnInit(): void {
        this.getNamePokemon();
    }

    openModal() {
        setTimeout(() => {
            this.myModal.nativeElement.style.display = 'block';
            for(let i = 0; i < this.nomes.length; i++) {
                this.api.http(`/${this.nomes[i].name}`).subscribe(data => {
                    console.log(data);
                })
            }
        });
    }

    closeModal() {
        setTimeout(() => {
            this.myModal.nativeElement.style.display = 'none';
        })
    }


    getNamePokemon() {
        setTimeout(() => {
            this.api.http('?offset=0&limit=50').subscribe(nomes => {
                if (nomes.results !== undefined) {
                    this.nomes = nomes.results;
                    for (let i = 0; i < nomes.results.length; i++) {
                        this.api.http(`/${nomes.results[i].name}`).subscribe(data => {
                            this.imagens[i] = data.sprites.front_default;
                        });
                    }
                }
            });
        });

    }


}
