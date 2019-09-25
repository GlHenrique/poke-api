import {Component, ElementRef, OnInit, ViewChild, HostListener} from '@angular/core';
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
    habilidades: any[] = [];
    paginator: any = 50
    loading: boolean = true;

    @ViewChild('cards', {static: false}) cards: ElementRef;
    @ViewChild('myBtn', {static: false}) myBtn: ElementRef;
    @ViewChild('myModal', {static: false}) myModal: ElementRef;
    @ViewChild('close', {static: false}) close: ElementRef;

    @HostListener('window:scroll', ['$event']) onScrollEvent($event) {
        //console.log($event.target.scrollingElement.scrollHeight);
        const scrollHeight = $event.target.scrollingElement.scrollHeight;
        const scrollTop = $event.target.scrollingElement.scrollTop;
        const clientHeight = $event.target.scrollingElement.clientHeight;
        let scrollFinal = false;
        if (scrollFinal) {
            return;
        }
        scrollFinal = scrollHeight - scrollTop === clientHeight;
        if (scrollFinal) {
            this.paginator = this.paginator + 30
        }
    }

    constructor(private api: ApiService) {
    }

    ngOnInit(): void {
        this.getNamePokemon('?offset=0&limit=964');
    }

    openModal(nome): void {
        setTimeout(() => {
            this.myModal.nativeElement.style.display = 'block';
            this.api.http(`/${nome}`).subscribe(data => {
                if (data.abilities) {
                    this.habilidades = data.abilities;
                }
            });

        });
    }

    closeModal(): void {
        setTimeout(() => {
            this.myModal.nativeElement.style.display = 'none';
        });
    }


    getNamePokemon(urlPagina: string) {
        setTimeout(() => {
            this.api.http(urlPagina).subscribe(nomes => {
                if (nomes.results !== undefined) {
                    this.nomes = nomes.results;
                    for (let i = 0; i < nomes.results.length; i++) {
                        this.api.http(`/${nomes.results[i].name}`).subscribe(data => {
                            this.imagens[i] = data.sprites.front_default;

                        });
                    };
                    this.loading = false;
                }
            });

        });

    }


}
