import { Component, OnInit, Input } from '@angular/core';
import {faStar} from "@fortawesome/free-solid-svg-icons";


@Component({
  selector: 'app-casa',
  templateUrl: './casa.component.html',
  styleUrls: ['./casa.component.scss']
})
export class CasaComponent implements OnInit {

  @Input() id! : number;
  @Input() title?: string;
  @Input() country!: string;
  @Input() city!: string;
  @Input() rating?: number;
  @Input() price?: number;
  @Input() host_type!: string;
  @Input() featured_photo?: string

  faStar=faStar


  constructor( ) { }

  ngOnInit(): void {

  }

}
