import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

const API_BASE = "https://m9-frontend.upskill.appx.pt/upbnb";

@Injectable({
  providedIn: 'root'
})
export class AlojamentosLuxoService {

  constructor(private http: HttpClient) {
  }

  getCasas() {
    return this.http.get(API_BASE + "/casas");
  }
}
