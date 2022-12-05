import {Component, Input, OnInit} from '@angular/core';
import {AlojamentosLuxoService} from "../alojamentos-luxo.service";
import {ActivatedRoute} from "@angular/router";
import {faStar,} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss']
})
export class DetalhesComponent implements OnInit {
  detalhes?: Casa
  id: number
  faStar = faStar
  anfitriao!: Anfitriao
  galeria!: string[]
  comentarios!: Comentador[];


  constructor(public route: ActivatedRoute, public alojamentoLuxoService: AlojamentosLuxoService) {
    this.id = route.snapshot.params["id_casa"]
  }

  ngOnInit(): void {
    this.alojamentoLuxoService.getDetalhes(this.id).subscribe((detalhes) => {
      this.detalhes = detalhes;
    })

    this.alojamentoLuxoService.getAnfitriao(this.id).subscribe((anfitriao) => {
      this.anfitriao = anfitriao;
    })

    this.alojamentoLuxoService.getGaleria(this.id).subscribe((lista_fotos) => {
      this.galeria = lista_fotos.photos;
    })

    this.alojamentoLuxoService.getComentarios(this.id).subscribe((lista_comentarios) => {
      this.comentarios = lista_comentarios.reviews;
    })

  }
}
