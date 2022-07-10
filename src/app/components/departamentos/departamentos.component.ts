import { Component, OnInit } from '@angular/core';
import { Departamentos } from 'src/app/entities/departamentos';
import { DepartamentosService } from 'src/app/services/departamentos.service';

@Component({
  selector: 'app-departamentos',
  templateUrl:'./departamentos.component.html',
  styleUrls: ['./departamentos.component.css']
})
export class DepartamentosComponent implements OnInit {
  listaDepartamentos: Departamentos[] |undefined;
  departamentosFilter: any = { nombre: '' };
  p: number = 1;
  order: string = 'nombre';
  reversa: boolean = false;

  constructor(private departamentosService: DepartamentosService) { }

  ngOnInit(): void {
    this.departamentosService.departamentosSelect().subscribe(
      (res) =>{
        //verificamos que esten los datos
        //console.log(res);
        this.listaDepartamentos =JSON.parse(JSON.stringify(res));
      }
    )
  }

  setOrder(nombreColumna: string){
    if(this.order === nombreColumna){
      this.reversa = !this.reversa
    }

    this.order = nombreColumna
    console.log(this.order)
  }
  
}
