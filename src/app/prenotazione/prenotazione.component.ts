import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { TeatroService } from '../teatro.service';
import { Teatro } from '../app.component'

@Component({
  selector: 'app-prenotazione',
  templateUrl: './prenotazione.component.html',
  styleUrls: ['./prenotazione.component.css']
})
export class PrenotazioneComponent implements OnInit {
  @Input() utente: string;
  @Input() spettacolo: Teatro;
  @Input() chiave: string;
  @Output() PrenotazioneEvent = new EventEmitter<string>();
  posto: string;
  zona: string;

  constructor(private service: TeatroService) { }

  prenotaPosto(parte: any, i: number, j: number){
    if (parte == this.spettacolo.platea){
      this.spettacolo.platea[i][j] = this.utente;
      this.zona = "platea";
    }
    else if (parte == this.spettacolo.palco){
      this.spettacolo.palco[i][j] = this.utente;
      this.zona = "palco";
    }
    this.posto = "P"+(i+1)+(j+1);
    this.service.setSpettacolo(this.chiave, this.spettacolo).subscribe({
      next: ( x: any ) => {
        console.log("Successo");
      },
      error: err => console.error('Observer got an error: ' + JSON.stringify(err))
    })
  }

  ngOnInit() {
  }

}