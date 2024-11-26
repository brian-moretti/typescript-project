import { MezzoTrasporto } from "../enum/MezzoTrasporto";
import { Status } from "../enum/Status";
import { IUtente } from "./Utente";

interface IMezzo {
  id: number;
  tipo: MezzoTrasporto;
  status: Status;
  assegnaUtente(utente: IUtente): void;
}

export { IMezzo };
