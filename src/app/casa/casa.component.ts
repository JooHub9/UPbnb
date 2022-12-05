import {Component, OnInit, Input} from '@angular/core';
import {faStar} from "@fortawesome/free-solid-svg-icons";
import {AlojamentosLuxoService} from "../alojamentos-luxo.service";


@Component({
  selector: 'app-casa',
  templateUrl: './casa.component.html',
  styleUrls: ['./casa.component.scss']
})
export class CasaComponent implements OnInit {

  @Input() id!: number;
  @Input() title?: string;
  @Input() country!: string;
  @Input() city!: string;
  @Input() rating?: number;
  @Input() price?: number;
  @Input() host_type?: string;
  @Input() featured_photo!: string;
  @Input() time?: string;
  @Input() description?: string;
  @Input() type?: string;

  faStar = faStar


  constructor(public alojamentosLuxoService: AlojamentosLuxoService) {
  }

  ngOnInit(): void {

  }

}
