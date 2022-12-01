import {Component, Input, OnInit} from '@angular/core';
import {AlojamentosLuxoService} from "../alojamentos-luxo.service";

@Component({
  selector: 'app-imagem',
  templateUrl: './imagem.component.html',
  styleUrls: ['./imagem.component.scss']
})
export class ImagemComponent implements OnInit {
  @Input() id! :number
  @Input() featured_photo?: string


  constructor(public alojamentosLuxoService: AlojamentosLuxoService) {  }


  ngOnInit(): void {
  }

}
