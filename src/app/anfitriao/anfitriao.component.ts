import {Component, OnInit, Input} from '@angular/core';
import {faStar} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-anfitriao',
  templateUrl: './anfitriao.component.html',
  styleUrls: ['./anfitriao.component.scss']
})
export class AnfitriaoComponent implements OnInit {

  @Input() name!: string;
  @Input() photo!: string;
  @Input() type!: string;
  @Input() rating!: number;

  faStar = faStar

  constructor() {
  }

  ngOnInit(): void {
  }

}
