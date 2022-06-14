import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../logger.service';

@Component({
  selector: 'app-exemplo-servicos1',
  templateUrl: './exemplo-servicos1.component.html',
  styleUrls: ['./exemplo-servicos1.component.css']
})
export class ExemploServicos1Component {
  nome = "";

  constructor(public logger: LoggerService) {}

  // Injetar os Serviços dentro do Component
  adicionarNome() {
    this.logger.logar(`O nome ${this.nome} foi adicionado`);
  }


}
