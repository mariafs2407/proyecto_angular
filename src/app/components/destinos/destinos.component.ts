import { Component, OnInit } from '@angular/core';
import { Destinos } from 'src/app/entities/destinos';
import { DestinosService } from 'src/app/services/destinos.service';

@Component({
  selector: 'app-destinos',
  templateUrl: './destinos.component.html',
  styleUrls: ['./destinos.component.css']
})
export class DestinosComponent implements OnInit {
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
