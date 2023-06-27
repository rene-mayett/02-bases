import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name:string = 'ironman';
  public age:number = 45;

  get capitalizedName():string {  //propiedad
    return this.name.toUpperCase();
  }

  getHeroDescription():string {  //metodo "try private"
    return `${this.name} - ${this.age}`;
  }

  changeHero(){
    //TODO:
    return this.name='spiterman';
  }

  changeAge(){
    return this.age=29;
  }

}
