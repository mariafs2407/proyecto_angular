import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartamentosComponent } from './components/departamentos/departamentos.component';
import { DestinosComponent } from './components/destinos/destinos.component';
import { InicioComponent } from './home/inicio/inicio.component';
import { AtraccionesComponent } from './components/atracciones/atracciones.component';
import { HotelComponent } from './components/hotel/hotel.component';
 
const routes: Routes = [  
  {path: 'departamentos', component: DepartamentosComponent},
  {path:  'destinos', component: DestinosComponent},
  {path:  '', component: InicioComponent},
  {path: 'atracciones',component:AtraccionesComponent},
  {path: 'hotel',component:HotelComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
