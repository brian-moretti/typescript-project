import { ICitta } from "../interface/Citta";
import { IMezzo } from "../interface/Mezzo";

class Citta implements ICitta {
  nome: string;
  mezziDisponibili: IMezzo[];

  constructor(nome: string, mezziDisponibili: IMezzo[]) {
    this.nome = nome;
    this.mezziDisponibili = mezziDisponibili;
    if (!nome.trim()) {
      throw new Error("The fields can' be empty");
    }
  }

  aggiungiMezzo(mezzo: IMezzo): void {
    if (this.mezziDisponibili.includes(mezzo)) {
      console.log(
        `Il mezzo che si vuole inserire è già presente tra l'elenco di quelli disponibili per questa Città \n`
      );
      return;
    }
    this.mezziDisponibili.push(mezzo);
    console.log(
      `É stato aggiunto un nuovo mezzo: ${mezzo.tipo}, con id ${mezzo.id}. Il nuovo mezzo si trova ora nello status ${mezzo.status} \n`
    );
  }
}

export { Citta };
