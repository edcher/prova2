import { Component, Output, EventEmitter } from '@angular/core';
import { TeatroService } from './teatro.service';

export class Teatro {
  platea: any[] = [];
  palco: any[] = [];
  constructor (nFilePlatea, nPostiPlatea, nFilePalco, nPostiPalco) {
    this.platea = new Array(nFilePlatea).fill("").map(() => Array(nPostiPlatea).fill(""));
    this.palco = new Array(nFilePalco).fill("").map(() => Array(nPostiPalco).fill(""));
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})

export class AppComponent  {
  title: string = 'Prenotazioni spettacolo';
  spettacolo: Teatro;
  chiave: string = undefined;
  utente: string = undefined;
  constructor(private service: TeatroService) { }

  creaSpettacolo(){
    const spettacolo = new Teatro(7,10,4,6);
    this.service.newSpettacolo().subscribe({
      next: ( key: any ) => {
        this.service.setSpettacolo(key, spettacolo).subscribe({
          next: ( x: any ) => {
            console.log("Lo spettacolo con la chiave "+this.chiave+" è stato creato");
            this.cercaSpettacolo(key);
          },
          error: err => console.error('Observer got an error: ' + JSON.stringify(err))
        })
      },
      error: err => console.error('Observer got an error: ' + JSON.stringify(err))
    })
  }

  cercaSpettacolo(key: string){
    this.service.getSpettacolo(key).subscribe({
      next: (x: any) => { 
      this.spettacolo = JSON.parse(x);
      this.chiave = key;
      },
      error: err => console.error('Observer got an error: ' + JSON.stringify(err))
    })
  }

  mostraPalcoscenico(nome: string){
    this.utente = nome;
  }

  clear(){
    this.utente = undefined;
    this.chiave = undefined;
  }

}
