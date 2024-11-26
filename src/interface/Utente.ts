import { IMezzo } from "./Mezzo";

interface IUtente {
  nome: string;
  cognome: string;
  email: string;
  paymentMethod: string;
  prenotaMezzo(mezzo: IMezzo): void;
}

export { IUtente };
