import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})
export class GaleriaComponent implements OnInit {

  @Input() photos?: string;


  constructor() {
  }

  ngOnInit(): void {
  }

}
