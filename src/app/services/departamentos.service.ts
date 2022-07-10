import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepartamentosService {
  
  constructor(private http: HttpClient) { }

  departamentosSelect(){
    const ruta ="https://isilep1.000webhostapp.com/departamentos.php";
    return this.http.get(ruta);
  }

}
