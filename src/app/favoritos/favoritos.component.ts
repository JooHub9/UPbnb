import {Component, OnInit} from '@angular/core';
import {AlojamentosLuxoService} from "../alojamentos-luxo.service";

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.scss']
})
export class FavoritosComponent implements OnInit {

  lista_favoritos: Casa[] = []



  constructor(public alojamentoLuxoService: AlojamentosLuxoService) {
  }

  ngOnInit(): void {
    this.alojamentoLuxoService.getFavoritas().subscribe((favoritos: any) => {
      this.lista_favoritos = favoritos.data;
    })
  //  let lista_ordenada = this.lista_favoritos.filter(
    //(casa) => this.Casa.includes(country))
    }

}
