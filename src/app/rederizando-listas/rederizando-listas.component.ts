import { Component, OnInit } from '@angular/core';
import { Celular } from './types/Celular';

@Component({
  selector: 'app-rederizando-listas',
  templateUrl: './rederizando-listas.component.html',
  styleUrls: ['./rederizando-listas.component.css']
})
export class RederizandoListasComponent  {
  celulares: Celular[] = [ 
    {id: 1, nome: "Celular XL", descricao: "Um Celular Grande", esgotado: false},
    {id: 2, nome: "Celular Normal", descricao: "Um Celular Normal", esgotado: true},
    {id: 3, nome: "Celular mini", descricao: "Um Celular pequeno", esgotado: false}]
}
