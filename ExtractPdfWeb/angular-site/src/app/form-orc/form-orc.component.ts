import { Component, OnInit } from '@angular/core';
import { Orc } from '../models/orc.models'

import {OrcService} from '../services/orc.service'
import { Services } from '@angular/core/src/view';
import { Explicacion } from '../models/explicacion.models';


@Component({
  selector: 'app-form-orc',
  templateUrl: './form-orc.component.html',
  styleUrls: ['./form-orc.component.css']
})
export class FormOrcComponent implements OnInit {


  formulario : Orc = new Orc();

  
  constructor(private ser: OrcService) { }

  ngOnInit() {
  }

  getForm(){
    console.log(`Descripcion ${this.formulario.descripcion}`);
    console.log(`Descripcion ${this.formulario.documento}`);

  }
  
  public result: Explicacion;
  boton(){
    console.log('pulsado')
    this.ser.getExplicacion()
      .subscribe(entrada => this.result= entrada)
      console.log(this.result)
      this.formulario.descripcion = this.result[0]["titulo"];
      
  }

}
