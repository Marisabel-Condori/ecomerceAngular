import { Component } from '@angular/core';

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

  person={
    name: 'Mari',
    age:18,
    avatar: 'https://assets.dev-filo.dift.io/img/2021/08/05/rocket_portada_sq.jpg'

  }
}
