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

  names: string[] = ['mari', 'nico', 'eimy']
  newName ='';

  toggleButton(){
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge(){
    this.person.age +=1;
  }

  onScroll(event: Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop)
  }

  changeName(event:Event){
    const element = event.target as HTMLInputElement;
    this.person.name = element.value
  }

  addName(){
    this.names.push(this.newName);
    this.newName='';
  }

  deleteName(index:number){
    this.names.splice(index,  1)
  }
}
