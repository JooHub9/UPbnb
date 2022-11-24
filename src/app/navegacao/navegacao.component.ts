import {Component, OnInit} from '@angular/core';
import {faMagnifyingGlass, faHeart} from "@fortawesome/free-solid-svg-icons";


@Component({
  selector: 'app-navegacao',
  templateUrl: './navegacao.component.html',
  styleUrls: ['./navegacao.component.scss']
})
export class NavegacaoComponent implements OnInit {

  faMagnifyingGlass = faMagnifyingGlass;
  faHeart = faHeart;


  constructor() {

  }

  ngOnInit(): void {
  }

}
