import {Component, Input, OnInit} from '@angular/core';
import {AlojamentosLuxoService} from "../alojamentos-luxo.service";
import {faStar} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {

  reservas_passadas: Casa[] = []
  reservas_atuais: Casa[] = []

  faStar = faStar


  constructor(public alojamentosLuxoService: AlojamentosLuxoService) {
  }

  ngOnInit(): void {
    this.alojamentosLuxoService.getReservasAtuais().subscribe((atuais) => {
      this.reservas_atuais = atuais.data;
    })
    this.alojamentosLuxoService.getReservasPassadas().subscribe((passadas) => {
      this.reservas_passadas = passadas.data;
    })
  }

}
