import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-ingresar-presupuesto',
  templateUrl: './ingresar-presupuesto.component.html',
  styleUrls: ['./ingresar-presupuesto.component.css']
})
export class IngresarPresupuestoComponent {
  cantidad: number;
  cantidadIncorrecta: boolean;

  constructor(private _presupuestoserver: PresupuestoService, 
    private router: Router){

    this.cantidad = 0;
    this.cantidadIncorrecta=false;
  }

  ngOnInit(): void{}

  agregar(){
    if(this.cantidad>0){
      this.cantidadIncorrecta=false
      this._presupuestoserver.presupuesto = this.cantidad;
      this._presupuestoserver.restante = this.cantidad;
      this.router.navigate(['/gastos'])

    }else{
      this.cantidadIncorrecta=true
    }
  }

}
