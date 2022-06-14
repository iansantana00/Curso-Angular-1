import { Component, Input, OnChanges, SimpleChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-ciclo-de-vida',
  templateUrl: './ciclo-de-vida.component.html',
  styleUrls: ['./ciclo-de-vida.component.css']
})
export class CicloDeVidaComponent implements OnChanges, OnInit{
  horario = new Date();
  timer: any = null!;

  constructor() {}

  @Input() texto = "";

  ngOnChanges(changes: SimpleChanges): void {
      console.log("O evento onChanges disparou com as seguintes mudanças " + changes);
  }

  ngOnInit(): void {
    console.log("O evento OnInit disparou");
    this.timer = setInterval(() => this.horario = new Date(), 1000);
    // setInterval função disponibilizada pelo navegador que serve
    // executar uma função de tempos em tempos
    // 1000 => 1 seg


  
  
  





  }



}
