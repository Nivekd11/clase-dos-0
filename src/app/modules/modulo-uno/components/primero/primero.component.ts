import { Component, OnInit } from '@angular/core';
import { CompartidoService } from 'src/app/services/compartido/compartido.service';

@Component({
  selector: 'app-primero',
  templateUrl: './primero.component.html',
  styleUrls: ['./primero.component.scss']
})
export class PrimeroComponent implements OnInit {

  constructor(private servicioCompartido: CompartidoService) { }

  ngOnInit(): void {
    this.button();
  }

  
  

  button(){
    let boton = document.getElementById('button');
    boton?.addEventListener("click",()=>{
      console.log("holaaaaaa")
      this.servicioCompartido.name= "Kevin";
      this.servicioCompartido.correo = "kevin@mail.com";
      
      console.log("Segundo Componente",this.servicioCompartido)
    
    });
  }

}
