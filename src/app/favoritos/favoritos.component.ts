import {Component, OnInit} from '@angular/core';
import {AlojamentosLuxoService} from "../alojamentos-luxo.service";

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.scss']
})
export class FavoritosComponent implements OnInit {

  lista_favoritos: Casa[] = []
  lista_ordenada: string[] = []

  constructor(public alojamentoLuxoService: AlojamentosLuxoService) {
  }

  ngOnInit(): void {
    this.alojamentoLuxoService.getFavoritas().subscribe((favoritos) => {
      this.lista_favoritos = favoritos.data;

      for (let i = 0; i < this.lista_favoritos.length; i++) {
        if (!this.lista_ordenada.includes(this.lista_favoritos[i].country)) {
          this.lista_ordenada.push(this.lista_favoritos[i].country);
        }
      }
    })

  }

}
