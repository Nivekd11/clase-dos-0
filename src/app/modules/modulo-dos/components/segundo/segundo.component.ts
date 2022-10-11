import { Component, OnInit } from '@angular/core';
import { CompartidoService } from 'src/app/services/compartido/compartido.service';

@Component({
  selector: 'app-segundo',
  templateUrl: './segundo.component.html',
  styleUrls: ['./segundo.component.scss']
})
export class SegundoComponent implements OnInit {

  

  constructor(public compartidoService: CompartidoService) { }
  
  ngOnInit(): void {
    this.buttonClick()
    console.log("Primer componente",this.compartidoService)
  }

 

  getDataForm(){
    let name: HTMLInputElement =<HTMLInputElement> document.getElementById("name");
    let email: HTMLInputElement = document.getElementById("email") as HTMLInputElement;

    name.value= this.compartidoService.name
    email.value= this.compartidoService.correo

    console.log(name,email)
  }

  buttonClick(){
    let update = document.getElementById('update');
    update?.addEventListener('click',()=>{
      this.getDataForm();

    })
  }
 
}
