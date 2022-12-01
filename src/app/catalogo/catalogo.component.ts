import {Component, OnInit} from '@angular/core';
import {AlojamentosLuxoService} from "../alojamentos-luxo.service";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})
export class CatalogoComponent implements OnInit {
  catalogo = <Catalogo>{}
  lista_casas: Casa[] = []
  pesquisar: string[] = []
  item: string = ""
  page = 1


  getPesquisar(e: any) {
    const item = e.target.value;
    return this.pesquisar.push(item)
  }

  faMagnifyingGlass = faMagnifyingGlass

  constructor(public alojamentosLuxoService: AlojamentosLuxoService, public route: ActivatedRoute) {
    this.alojamentosLuxoService.getPesquisa(this.item).subscribe((pesquisa: any) => {
      this.item = pesquisa

    })
  }

  ngOnInit(): void {
    this.alojamentosLuxoService.getCasas().subscribe((casas: any) => {
      this.catalogo = <Catalogo>casas;
      this.lista_casas = this.catalogo.data
    })

  }

  maisResultados(): void {
    this.page++
    this.alojamentosLuxoService.getCasas(this.page).subscribe((casas) => {
      let resultados = <Catalogo>casas;
      this.lista_casas = [...this.lista_casas, ...resultados.data]
    })
  }
}
