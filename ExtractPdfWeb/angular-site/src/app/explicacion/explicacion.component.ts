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

  constructor(private service: ExplicacionService) { }

  ngOnInit() {
    this.boton()
  }


  public result: Explicacion[];


  boton(): void {
    console.log('pulsado');
    
    this.service.getExplicacion()
      .subscribe(entrada => this.result= entrada);
      console.log(this.result);

      
  }


}
