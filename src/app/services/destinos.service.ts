import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DestinosService {

  constructor(private http: HttpClient) { }
  destinosSelect(){
    const ruta = "https://isilep1.000webhostapp.com/destinos.php";
    return this.http.get(ruta);
  }
}
