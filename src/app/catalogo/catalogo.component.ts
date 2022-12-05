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
  item: string = ""
  page = 1


  getPesquisar(pesquisa: string) {
    this.item = pesquisa
    this.listarCasas(true);
  }

  faMagnifyingGlass = faMagnifyingGlass

  constructor(public alojamentosLuxoService: AlojamentosLuxoService, public route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.listarCasas();
  }

  listarCasas(apagar: boolean = false): void {
    this.alojamentosLuxoService.getCasas(this.page, this.item).subscribe((casas) => {
      let resultados = <Catalogo>casas;
      if (apagar)
        this.lista_casas = resultados.data
      else
        this.lista_casas = [...this.lista_casas, ...resultados.data]
    })
  }

  maisResultados(): void {
    this.page++
    this.listarCasas();
  }
}
