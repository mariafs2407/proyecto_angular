import { Component, Input, OnInit } from '@angular/core';
import { Destinos } from 'src/app/entities/destinos';
import { Hotel } from 'src/app/entities/lugar';
import { HotelService } from 'src/app/services/hotel.service';


@Component({
  selector: 'app-lugar',
  templateUrl: './lugar.component.html',
  styleUrls: ['./lugar.component.css']
})
export class LugarComponent implements OnInit {

  @Input() destinoX: Destinos| undefined;
  listaHotel: Hotel[] | undefined;

  constructor(private hotelService : HotelService ) {
     
   }

  ngOnInit(): void {    
  }
  
  ngOnChanges(){
    console.log(this.destinoX?.nombre);

    const nombre = this.destinoX?.nombre || "";
    this.hotelService.hotelSelect(nombre).subscribe(
      (res) => {
        console.log(res);
         this.listaHotel = JSON.parse(JSON.stringify(res));
       }
     )    
   }

}
