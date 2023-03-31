import { Component } from "@angular/core";


@Component({
    
    selector: 'app-heroe',
    templateUrl: 'heore.component.html'

})

export class HeoreComponent{
    nombre: string = 'Spider Man';
    edad: number = 23;

    get nombreCapitalizado(): string{
        return this.nombre.toUpperCase();
    }

    obtenerNombre(): string{
        return ` ${this.nombre} - ${this.edad} `;
    }


    cambiarNombre(): void{
        this.nombre = 'Hulk';
    }

    cambiarEdad(): void{
        this.edad = 43;
    }

}