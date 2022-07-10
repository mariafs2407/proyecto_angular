import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  constructor(private http: HttpClient) { }

  hotelSelect( nombre: string){
    const ruta ="https://mariafs24.000webhostapp.com/hotel2.php";

    const formData: FormData =new FormData();
    
    formData.append("nombre",nombre)  
    return this.http.post(ruta,formData).pipe(
      map((res) =>{
        return res
      })      
    ) 
  }
}
