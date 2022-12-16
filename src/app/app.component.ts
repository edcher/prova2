import { Component } from '@angular/core';
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

  creaSpettacolo(nFilePlatea, nPostiPlatea, nFilePalco, nPostiPalco){
    console.log(nFilePlatea, nPostiPlatea, nFilePalco, nPostiPalco);
    const spettacolo = new Teatro(nFilePlatea, nPostiPlatea, nFilePalco, nPostiPalco);
    console.log(spettacolo);
    this.service.newSpettacolo().subscribe({
      next: ( key: any ) => {
        this.chiave = key;
        this.service.setSpettacolo(this.chiave, spettacolo).subscribe({
          next: ( x: any ) => {
            console.log("Lo spettacolo con la chiave "+this.chiave+" è stato creato");
            this.cercaSpettacolo(this.chiave);
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
