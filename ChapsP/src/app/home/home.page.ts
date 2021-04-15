import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  proyectos=[
    {tittle: 'hola a todos', content:'esta app trata de no'},
    {tittle: 'dsfsdf', content:'iopuiopuiop'}
  ];

  constructor() {}

}
