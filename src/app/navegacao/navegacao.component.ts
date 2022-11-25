import {Component, OnInit} from '@angular/core';
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {faHeart} from "@fortawesome/free-regular-svg-icons";


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
