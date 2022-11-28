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
  lista_casas: Casa[] =[]
  item : string = ""

faMagnifyingGlass =faMagnifyingGlass

  constructor(public alojamentosLuxoService: AlojamentosLuxoService, public route:ActivatedRoute) {
    this.item = route.snapshot.params["item"]
  }

  ngOnInit(): void {
    this.alojamentosLuxoService.getCasas().subscribe((casas: any) => {
      this.catalogo = <Catalogo>casas;
      this.lista_casas = this.catalogo.data
    })

  }

}
