import { Component, OnInit } from '@angular/core';
import { Destinos } from 'src/app/entities/destinos';
import { DestinosService } from 'src/app/services/destinos.service';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {
  listaDestino: Destinos[] | undefined;
  destinoElegido: Destinos |undefined;

  constructor(private destinosService: DestinosService) { }
  ngOnInit(): void {
    this.destinosService.destinosSelect().subscribe(
      (res) => {
        //console.log(res);
        this.listaDestino = JSON.parse(JSON.stringify(res));
      }
  )
  }
  

  seleccionar(destinoSeleccionado: Destinos){
    //verificamos en la consola 
    console.log(destinoSeleccionado);
    this.destinoElegido = destinoSeleccionado;
  }

}
