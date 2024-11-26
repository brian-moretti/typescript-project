import { MezzoTrasporto } from "../enum/MezzoTrasporto";
import { Status } from "../enum/Status";
import { IMezzo } from "../interface/Mezzo";
import { IUtente } from "../interface/Utente";

class Mezzo implements IMezzo {
  id: number;
  tipo: MezzoTrasporto;
  status: Status;

  articolo: string;

  constructor(id: number, tipo: MezzoTrasporto, status: Status) {
    this.id = id;
    this.tipo = tipo;
    this.status = status;
    this.articolo =
      this.tipo === MezzoTrasporto.Bici
        ? "La"
        : this.tipo === MezzoTrasporto.Monopattino
        ? "Il"
        : "Lo";
  }

  assegnaUtente(utente: IUtente): void {
    this.status = Status.InUso;
    console.log(
      `${this.articolo} ${this.tipo} è stato assegnato all'utente: ${utente.nome} ${utente.cognome}. Lo stato del Mezzo con id: ${this.id} è ora impostato su ${this.status} \n`
    );
  }

  rimuoviUtente(utente: IUtente): void {
    if (this.status !== Status.InUso) {
      console.log(
        `Il mezzo è nello status ${this.status}, pertanto non c'è alcun utente da rimuovere \n`
      );
    }
    this.status = Status.Disponibile;
    console.log(
      `Grazie ${
        utente.nome
      } per aver prenotato ${this.articolo.toLowerCase()} ${
        this.tipo
      }. Il servizio è terminato. Adesso lo stato del mezzo verrà impostato su ${
        this.status
      }\n`
    );
  }

  checkStatus() {
    console.log(`Stato di ${this.tipo}: ${this.status} \n`);
  }
}

export { Mezzo };
