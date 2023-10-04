import { Component } from '@angular/core';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-ingresar-gasto',
  templateUrl: './ingresar-gasto.component.html',
  styleUrls: ['./ingresar-gasto.component.css']
})
export class IngresarGastoComponent {

  nombreGasto: string;
  cantidad: number;
  formularioIncorrecto: boolean;
  textIncorrecto:string;

  constructor(private _presupuestoService: PresupuestoService ){
    this.nombreGasto="";
    this.cantidad=0;
    this.formularioIncorrecto=false;
    this.textIncorrecto="Gasto o Cantidad incorrecta";
  }
  
  agregarGasto(){
    if(this.nombreGasto === '' ){
      this.textIncorrecto = 'Tiene que escribir el nombre del gasto'
      this.formularioIncorrecto = true;
      return;
    }else if( this.cantidad <= 0 ){
      this.textIncorrecto = 'La cantidad tiene que ser mayor a cero'
      this.formularioIncorrecto = true;
      return;

    }else if(  this.cantidad>this._presupuestoService.presupuesto){
      this.textIncorrecto = 'La cantidad no puede ser mayor al presupuesto'
      this.formularioIncorrecto = true;
      return;
    }else if(this.cantidad>this._presupuestoService.restante){  
      this.textIncorrecto = 'La cantidad no puede ser mayor al restante'
      this.formularioIncorrecto = true;
      return;
    }else{
      


      //Creamos el objeto
      const GASTO = {
        nombre: this.nombreGasto,
        cantidad: this.cantidad
      }


      //Enviamos el objeto a los suscriptores via subject
      this._presupuestoService.agregarGasto(GASTO);


      //Reseteamos formulario
      this.formularioIncorrecto= false;
      this.nombreGasto='';
      this.cantidad =0;

    }
  }

}