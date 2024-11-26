import { Citta } from "./class/CittaClass";
import { Mezzo } from "./class/MezzoClass";
import { Utente } from "./class/UtenteClass";
import { MezzoTrasporto } from "./enum/MezzoTrasporto";
import { Status } from "./enum/Status";

let bici = new Mezzo(1, MezzoTrasporto.Bici, Status.Disponibile);
let scooter = new Mezzo(2, MezzoTrasporto.Scooter, Status.Disponibile);
let monopattino = new Mezzo(3, MezzoTrasporto.Monopattino, Status.Disponibile);

let user1 = new Utente(
  "Guido",
  "Lamoto",
  "guidolamoto@gmail.com",
  "CC - Mastercard"
);
let user2 = new Utente(
  "Gustavo",
  "Lapasta",
  "gustavolapasta@gmail.com",
  "CC - Visa"
);
let user3 = new Utente(
  "Vera",
  "Pecunia",
  "verapecunia@gmail.com",
  "CC - AmericanExpress"
);

let citta1 = new Citta("Celano", [scooter, monopattino]);
let citta2 = new Citta("Rocca di Cambio", [bici, monopattino]);
let citta3 = new Citta("Scanzano Jonico", [bici, scooter]);

// check Error
citta1.aggiungiMezzo(scooter);

citta1.aggiungiMezzo(bici);
scooter.checkStatus();
user1.prenotaMezzo(scooter);
scooter.assegnaUtente(user1);
user2.prenotaMezzo(scooter); // check error
scooter.rimuoviUtente(user1);
scooter.checkStatus();

citta2.aggiungiMezzo(scooter);
user2.prenotaMezzo(monopattino);
monopattino.assegnaUtente(user2);
monopattino.rimuoviUtente(user2);
monopattino.checkStatus();

user3.prenotaMezzo(bici);
bici.assegnaUtente(user3);
citta3.aggiungiMezzo(monopattino);
bici.rimuoviUtente(user3);
bici.checkStatus();
