import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {API_URL} from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private api: HttpClient) {
    }

    http(parametro): Observable<any> {
        return this.api.get<any[]>(`${API_URL}${parametro}`);
    }
}
