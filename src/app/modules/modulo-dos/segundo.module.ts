import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SegundoComponent } from './components/segundo/segundo.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SegundoComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    SegundoComponent
  ]
})
export class SegundoModule { }
