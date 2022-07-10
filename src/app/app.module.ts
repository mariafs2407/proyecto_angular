import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterPipeModule } from 'ngx-filter-pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';       
import { DepartamentosComponent } from './components/departamentos/departamentos.component';
import { DestinosComponent } from './components/destinos/destinos.component';
import { RegionesComponent } from './home/regiones/regiones.component';
import { DestacamosComponent } from './home/destacamos/destacamos.component';
import { InicioComponent } from './home/inicio/inicio.component';
import { NosotrosComponent } from './home/nosotros/nosotros.component';
import { MainImagenComponent } from './home/main-imagen/main-imagen.component';
import { MainFooterComponent } from './common/main-footer/main-footer.component';
import { MainNavComponent } from './common/main-nav/main-nav.component';
import { ContactanosComponent } from './home/contactanos/contactanos.component';
import { VideoComponent } from './home/video/video.component';
import { AnuncioComponent } from './home/anuncio/anuncio.component';
import { DatosComponent } from './home/datos/datos.component';
import { HotelComponent } from './components/hotel/hotel.component';
import { AtraccionesComponent } from './components/atracciones/atracciones.component';
import { LugarComponent } from './components/lugar/lugar.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartamentosComponent,
    DestinosComponent,
    RegionesComponent,
    DestacamosComponent,
    InicioComponent,
    NosotrosComponent,
    MainImagenComponent,
    MainFooterComponent,
    MainNavComponent,
    ContactanosComponent,
    VideoComponent,
    AnuncioComponent,
    DatosComponent,
    HotelComponent,
    AtraccionesComponent,
    LugarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FilterPipeModule,
    FormsModule, 
    ReactiveFormsModule,
    NgxPaginationModule,
    OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
