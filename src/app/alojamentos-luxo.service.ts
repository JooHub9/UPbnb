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

  getDetalhes(id : number) {
    return this.http.get<Casa>(API_BASE + "/casas/" + id);
  }

  getPesquisa(item:string) {
    return this.http.get(API_BASE + "/casas/?search=" + item);
  }

  getFavoritas() {
    return this.http.get(API_BASE + "/casas/?ids=" + this.ids);
  }

  favoritos: number[] = JSON.parse(localStorage.getItem("favoritos") || "[]");
  ids: string = this.favoritos.join(",")

  isFavorite(id: number) {
    return this.favoritos.includes(id);
  }

  toggleFavorito(id: number) {
    if (this.isFavorite(id)) {
      this.favoritos.splice(this.favoritos.indexOf(id), 1)
    } else {
      this.favoritos.push(id);
    }

    localStorage.setItem("favoritos", JSON.stringify(this.favoritos))

  }
}
