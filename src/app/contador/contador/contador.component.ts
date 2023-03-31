import { Component } from '@angular/core';


@Component({
    selector: 'app-contador',
    template: `
     
        <h1> {{ title }} </h1>
        <h3> La base es: <strong> {{ base }} </strong> </h3>

        <button (click)="secuenciaBoton(base)">+ {{base}}</button>

        <span> {{ numero }} </span>

        <button (click)="secuenciaBoton(-base)">- {{base}}</button>

    `


})

export class contadorComponent {
    title : string = 'Operador';
    numero: number = 0;
    base  : number = 5;
    
    secuenciaBoton(valor: number){
        this.numero += valor;
  }
}