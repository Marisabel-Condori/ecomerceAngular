import { Component } from '@angular/core';

import {product} from './product.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  name = 'Mari';
  age = 20;
  imagen = 'https://assets.dev-filo.dift.io/img/2021/08/05/rocket_portada_sq.jpg'
  btnDisabled = true;

  person = {
    name: 'Mari',
    age: 18,
    avatar: 'https://assets.dev-filo.dift.io/img/2021/08/05/rocket_portada_sq.jpg'
  }

  names: string[] = ['mari', 'nico', 'eimy']
  newName = '';

  products: product[] = [
    {
      name: 'El mejor juguete',
      price: 565,
      image: './assets/images/toy1.jpg'
    },
    {
      name: 'bici',
      price: 356,
      image: './assets/images/toy2.jpg'
    },
    {
      name: 'Colleccion',
      price: 34,
      image: './assets/images/toy3.jpg'
    },
    {
      name: 'new toy',
      price: 565,
      image: './assets/images/toy4.png'
    },
    {
      name: 'pocoyo',
      price: 654,
      image: './assets/images/toy5.png'
    },
    {
      name: 'dino',
      price: 321,
      image: './assets/images/toy6.png'
    },
  ]

  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge() {
    this.person.age += 1;
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop)
  }

  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value
  }

  addName() {
    this.names.push(this.newName);
    this.newName = '';
  }

  deleteName(index: number) {
    this.names.splice(index, 1)
  }
}
