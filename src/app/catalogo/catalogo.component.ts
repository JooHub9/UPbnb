import {Component, OnInit} from '@angular/core';
import {AlojamentosLuxoService} from "../alojamentos-luxo.service";


@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.scss']
})
export class CatalogoComponent implements OnInit {
  catalogo = <Catalogo>{}
  lista_casas: Casa[] =[]


  constructor(private alojamentosLuxoService: AlojamentosLuxoService) {
  }

  ngOnInit(): void {
    this.alojamentosLuxoService.getCasas().subscribe((casas: any) => {
      this.catalogo = <Catalogo>casas;
      this.lista_casas = this.catalogo.data
    })

  }

}
