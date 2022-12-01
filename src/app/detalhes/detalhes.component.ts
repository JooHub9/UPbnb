import {Component, OnInit} from '@angular/core';
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
  galeria!: []


  constructor(public route: ActivatedRoute, public alojamentoLuxoService: AlojamentosLuxoService) {
    this.id = route.snapshot.params["id_casa"]
  }

  ngOnInit(): void {
    this.alojamentoLuxoService.getDetalhes(this.id).subscribe((detalhes) => {
      this.detalhes = detalhes;
    })

    this.alojamentoLuxoService.getAnfitriao(this.id).subscribe((anfitriao: any) => {
      this.anfitriao = anfitriao;
    })

    this.alojamentoLuxoService.getGaleria(this.id).subscribe((lista_fotos: any) => {
      this.galeria= lista_fotos.photos;
    })
  }
}
