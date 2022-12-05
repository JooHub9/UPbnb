import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

const API_BASE = "https://m9-frontend.upskill.appx.pt/upbnb";

@Injectable({
  providedIn: 'root'
})
export class AlojamentosLuxoService {

  constructor(private http: HttpClient) {
  }

  getCasas(page?: number, filtro?: string) {
    let url = API_BASE + "/casas"
    if (page) {
      url = url + "?page=" + page
    }
    if (filtro) {
      url = url + "&search=" + filtro
    }

    return this.http.get(url);
  }

  getDetalhes(id: number) {
    return this.http.get<Casa>(API_BASE + "/casas/" + id);
  }


  getReservasAtuais() {
    return this.http.get<Catalogo>(API_BASE + "/casas/current");
  }

  getReservasPassadas() {
    return this.http.get<Catalogo>(API_BASE + "/casas/past");
  }

  getAnfitriao(id: number) {
    return this.http.get<Anfitriao>(API_BASE + "/casas/" + id + "/host")
  }

  getGaleria(id: number) {
    return this.http.get<GaleriaAPI>(API_BASE + "/casas/" + id + "/photos")
  }

  getRegras(id: number) {
    return this.http.get<ComodidadesAPI>(API_BASE + "/casas/" + id + "/features")
  }

  getComentarios(id: number) {
    return this.http.get<Comentarios>(API_BASE + "/casas/" + id + "/reviews")
  }

  getFavoritas() {
    return this.http.get<Catalogo>(API_BASE + "/casas/?ids=" + this.favoritos.join(","));
  }


  favoritos: number[] = JSON.parse(localStorage.getItem("favoritos") || "[]");


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
