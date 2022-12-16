import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-conferma',
  templateUrl: './conferma.component.html',
  styleUrls: ['./conferma.component.css']
})
export class ConfermaComponent implements OnInit {
  @Input() utente: string;
  @Input() zona: string;
  @Input() posto: string;

  constructor() { }

  ngOnInit() {
  }

}