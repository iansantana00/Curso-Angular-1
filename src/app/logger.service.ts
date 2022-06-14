import { Injectable } from '@angular/core';

// Injetar
@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  // vetor string 
  mensagens: string[] = [];

  logar(mensagem: string) {
    console.log(mensagem);
    // Toda vez que logar irá adicionar a mensagem no vetor
    this.mensagens.push(mensagem);
  }

  exibeTodosOsLogs(){
    console.log(this.mensagens)
  }
}
