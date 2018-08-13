import { Component, OnInit } from '@angular/core';
import { Explicacion } from '../models/explicacion.models';
import { ExplicacionService } from 'src/app/services/explicacion.service';
import { Orc } from '../models/orc.models';

@Component({
  selector: 'app-explicacion',
  templateUrl: './explicacion.component.html',
  styleUrls: ['./explicacion.component.css']
})
export class ExplicacionComponent implements OnInit {

  constructor(private ser: ExplicacionService) { }


  formulario : Orc = new Orc();

  ngOnInit() {
    this.boton();
    
  }


  public result: Explicacion;

  loadExplicacion(){
    this.boton();
    this.formulario.descripcion = this.result[0]["titulo"];
  }


  boton(){
    console.log('pulsado');
    
    this.ser.getExplicacion()
      .subscribe(entrada => this.result= entrada);
      console.log(this.result);

      
  }


}
