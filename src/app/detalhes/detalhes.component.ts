import { Component, OnInit } from '@angular/core';
import {AlojamentosLuxoService} from "../alojamentos-luxo.service";
import {ActivatedRoute} from "@angular/router";
import {faStar} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss']
})
export class DetalhesComponent implements OnInit {
  detalhes?: Casa
  id: number
  faStar=faStar

  constructor(public route: ActivatedRoute, public alojamentoLuxoService:AlojamentosLuxoService) {
  this.id = route.snapshot.params["id_casa"]
  }
  ngOnInit(): void {
    this.alojamentoLuxoService.getDetalhes(this.id).subscribe((detalhes)=>{
      this.detalhes = detalhes;
    })
  }

}
