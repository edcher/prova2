import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nominativo',
  templateUrl: './nominativo.component.html',
  styleUrls: ['./nominativo.component.css']
})
export class NominativoComponent implements OnInit {
  @Input() utente: string;
  @Input() chiave: string;
  @Output() NominativoEvent = new EventEmitter<string>();
  constructor() { }
  inserisciNominativo(nome: string) {
    this.NominativoEvent.emit(nome);
  }
  ngOnInit() {
  }

}