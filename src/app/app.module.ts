import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeroComponent } from './modules/modulo-uno/components/primero/primero.component';
import { SegundoComponent } from './modules/modulo-dos/components/segundo/segundo.component';
import { PrimeroModule } from './modules/modulo-uno/primero.module';
import { SegundoModule } from './modules/modulo-dos/segundo.module';


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimeroModule,
    SegundoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
