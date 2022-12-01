import {Component, OnInit} from '@angular/core';
import {faAirFreshener, faDog, faTv } from "@fortawesome/free-solid-svg-icons";
//import{fa}
@Component({
  selector: 'app-regras',
  templateUrl: './regras.component.html',
  styleUrls: ['./regras.component.scss']
})
export class RegrasComponent implements OnInit {

  faAirFreshener = faAirFreshener
  faDog = faDog
  faTv=faTv
 // faMicrowave=faMicrowave


  constructor() {
  }

  ngOnInit(): void {
  }

}
