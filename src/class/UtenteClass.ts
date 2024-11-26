import { MezzoTrasporto } from "../enum/MezzoTrasporto";
import { Status } from "../enum/Status";
import { IMezzo } from "../interface/Mezzo";
import { IUtente } from "../interface/Utente";

class Utente implements IUtente {
  nome: string;
  cognome: string;
  email: string;
  paymentMethod: string;

  constructor(
    nome: string,
    cognome: string,
    email: string,
    paymentMethod: string
  ) {
    this.nome = nome;
    this.cognome = cognome;
    this.email = email;
    this.paymentMethod = paymentMethod;
    if (
      !nome.trim() ||
      !cognome.trim() ||
      !email.trim() ||
      !paymentMethod.trim()
    ) {
      throw new Error("The fields can't be empty");
    }
  }

  prenotaMezzo(mezzo: IMezzo): void {
    if (mezzo.status === Status.InUso) {
      console.log(
        `Ci dispiace ${this.nome} ${this.cognome}. Il mezzo scelto è già in uso da altri utenti. Riprova più tardi o scegli un altro mezzo, grazie \n`
      );
      return;
    }
    let articolo =
      mezzo.tipo === MezzoTrasporto.Bici
        ? "la"
        : mezzo.tipo === MezzoTrasporto.Monopattino
        ? "il"
        : "lo";
    console.log(
      `Ben fatto ${this.nome} ${this.cognome}! Hai prenotato ${articolo} ${mezzo.tipo} da usare in Città. Riceverai una email di conferma sull'indirizzo ${this.email}. L'addebito ti sarà scalato sul metodo scelto: ${this.paymentMethod} \n`
    );
  }
}

export { Utente };
