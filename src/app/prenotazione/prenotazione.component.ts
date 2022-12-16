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
  @Input() platea: any[] = [];
  @Input() palco: any[] = [];
  @Input() spettacolo: Teatro;
  @Input() chiave: string;
  @Output() PrenotazioneEvent = new EventEmitter<string>();

  constructor(private service: TeatroService) { }

  prenotaPosto(parte: any, i: number, j: number){
    console.log("ciaone");
    console.log(this.spettacolo);
    console.log(this.spettacolo.platea);
    if (parte == this.platea){
      console.log("problems?")
      this.spettacolo.platea[i][j] = this.utente;
    }
    else if (parte == this.palco){
      this.spettacolo.palco[i][j] = this.utente;
    }
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