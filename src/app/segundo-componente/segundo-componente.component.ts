import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})

export class SegundoComponenteComponent implements OnInit {
  nome = "João";
  dataNascimento = "1995-01-01";
  urlImagem = "/assets/joao.jpeg"

  mostrarDataNascimento() {
    alert(`A data de nascimento do João é:  ${this.dataNascimento}`)
  }


  constructor() { }

  ngOnInit(): void {  
  }

}
