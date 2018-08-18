import { Component, OnInit, ViewChild } from '@angular/core';
import { Orc } from '../models/orc.models'

import {OrcService} from '../services/orc.service'
import { saveAs } from 'file-saver/FileSaver';


@Component({
  selector: 'app-form-orc',
  templateUrl: './form-orc.component.html',
  styleUrls: ['./form-orc.component.css']
})
export class FormOrcComponent implements OnInit {
  @ViewChild('fileInput') fileInput;

  formulario : Orc = new Orc();

  
  constructor(private ser: OrcService) { }

  ngOnInit() {
  }

  getForm(){
    console.log(`Descripcion ${this.formulario.descripcion}`);
    console.log(`Documento ${this.formulario.documento}`);

  }
  
  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}

  async send() {
    let orc : Orc = new Orc();
    
    let fileBrowser = this.fileInput.nativeElement;
    if (fileBrowser.files && fileBrowser.files[0]) {
      
      orc.descripcion = this.formulario.descripcion;
      orc.documento = fileBrowser.files[0];
      orc.proceso = this.formulario.proceso;
    
    await this.add(orc);
    await this.delay(3000);
    console.log('yaa');

    }
    
  }
  archivo: string;

  add(orc: Orc){
   
    if (!orc) { 
      console.log("Objeto vacio")
      return; }
    this.ser.addFile( orc )
      .subscribe(res => {
        this.archivo= res['salida'];
        console.log(res['salida']);
        this.saveFile();
        
      });
    }
    
  saveFile() {
    var blob = new Blob([this.archivo], {type: "text/plain;charset=utf-8"});
    saveAs(blob, "resultado.docx");
  };
  

}
