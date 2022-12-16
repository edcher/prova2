import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TeatroService } from './teatro.service';
import { NominativoComponent } from './nominativo/nominativo.component';
import { PrenotazioneComponent } from './prenotazione/prenotazione.component';
import { ConfermaComponent } from './prenotazione/conferma/conferma.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule ],
  declarations: [ AppComponent, NominativoComponent, PrenotazioneComponent, ConfermaComponent ],
  bootstrap:    [ AppComponent ],
  providers: [TeatroService]
})
export class AppModule { }
