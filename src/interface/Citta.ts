import { IMezzo } from "./Mezzo";

interface ICitta {
  nome: string;
  mezziDisponibili: IMezzo[];
  aggiungiMezzo(mezzo: IMezzo): void;
}

export { ICitta };
