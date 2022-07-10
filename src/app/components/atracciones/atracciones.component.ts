import { Component, OnInit } from '@angular/core';
import { Destinos } from 'src/app/entities/destinos';
import { DestinosService } from 'src/app/services/destinos.service';

@Component({
  selector: 'app-atracciones',
  templateUrl: './atracciones.component.html',
  styleUrls: ['./atracciones.component.css']
})
export class AtraccionesComponent implements OnInit {
  listaDestino: Destinos[] | undefined;

  constructor(private destinosService: DestinosService) { }
  ngOnInit(): void {
    this.destinosService.destinosSelect().subscribe(
      (res) => {
        //console.log(res);
        this.listaDestino = JSON.parse(JSON.stringify(res));
      }
  )
  }

}
