import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
<p>Contador: {{counter}}</p>
<button (click)="incremento(-1)"> - 1 </button>
<button (click)="resetCounter()"> RESET </button>
<button (click)="incremento(1)"> + 1 </button>`,
})

export class CounterComponent{

  public counter:number = 10;

  incremento(valor: number):void{
    this.counter += valor;
  }

  resetCounter():void{
    this.counter=0;
  }

}
