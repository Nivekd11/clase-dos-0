import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompartidoService } from 'src/app/services/compartido/compartido.service';
import { PrimeroComponent } from './components/primero/primero.component';



@NgModule({
  declarations: [
    PrimeroComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    PrimeroComponent
  ]
})
export class PrimeroModule { }
