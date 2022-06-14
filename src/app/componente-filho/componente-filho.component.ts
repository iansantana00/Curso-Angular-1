import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-componente-filho',
  templateUrl: './componente-filho.component.html',
  styleUrls: ['./componente-filho.component.css']
})
export class ComponenteFilhoComponent {
// Input inserir informações 
// Sobrenome vai ser vazio caso não passe nenhuma informação
  @Input() sobrenome = "";
  @Output() mostraNome = new EventEmitter();

  nome = "";
}
