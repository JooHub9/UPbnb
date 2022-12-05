import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AlojamentosLuxoService} from "../alojamentos-luxo.service";

@Component({
  selector: 'app-regras',
  templateUrl: './regras.component.html',
  styleUrls: ['./regras.component.scss']
})
export class RegrasComponent implements OnInit {
  Object = Object;

  id: number
  regrasTodas: any = {
    airConditioner: "assets/ac.svg",
    tv: "assets/tv.svg",
    petsAllowed: "assets/dog.svg",
    wifi: "assets/wifi.svg",
    smokingAllowed: "assets/smoking.svg",
    washingMachine: "assets/washer.svg",
    fireplace: "assets/fireplace.svg",
    microwave: "assets/microwave.svg",
  }
  icon?: string;
  regras!: string[];


  constructor(public route: ActivatedRoute, public alojamentoLuxoService: AlojamentosLuxoService) {
    this.id = route.snapshot.params["id_casa"]
  }


  ngOnInit(): void {
    this.alojamentoLuxoService.getRegras(this.id).subscribe((regras) => {
      this.regras = regras.features;
    })

  }

}
