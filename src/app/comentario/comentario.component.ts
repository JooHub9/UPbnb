import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-comentario',
  templateUrl: './comentario.component.html',
  styleUrls: ['./comentario.component.scss']
})
export class ComentarioComponent implements OnInit {

  @Input() photo!: string;
  @Input() name!: string;
  @Input() date?: string;
  @Input() comment?: string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
