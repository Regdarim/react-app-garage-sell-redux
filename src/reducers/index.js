import ostrzeMrozu from "../assets/images/ostrzeMrozu.jpg";
import lod from "../assets/images/lod.jpg";
import innePiesni from "../assets/images/innePiesni.jpg";
import butyNike from "../assets/images/butyNike.jpg";
import english from "../assets/images/english.jpg";
import sezonBurz from "../assets/images/sezonBurz.jpg";

import * as types from "../actions/actionTypes";

const initialState = {
  isModalOpen: false,
  setBuyCounter: 0,

  garageItems: [
    {
      id: 1,
      title: "Frostmourne",
      desc:
        "Frostmourne was the runeblade that Ner'zhul, the Lich King, thrust from the Frozen Throne, intending that Arthas Menethil — his unwitting potential host — would discover it on the continent of Northrend. It was wielded by Arthas, the new Lich King, until it was destroyed by Tirion Fordring following his defeat in Icecrown Citadel.",
      image: ostrzeMrozu,
      price: "20zł",
    },
    {
      id: 2,
      title: "Lód - Jacek Dukaj",
      desc:
        "Akcja powieści Jacka Dukaja toczy się w alternatywnej rzeczywistości, gdzie I wojna światowa nigdy nie wybuchła, jest rok 1924, a Królestwo Polskie wciąż zamrożone jest pod władzą cara i w Belle Epoque. ",
      image: lod,
      price: "25zł",
    },
    {
      id: 3,
      title: "Inne Pieśni - Jacek Dukaj",
      desc:
        "Nie science fiction, nie fantasy, nie historia alternatywna lecz rzecz dzieje się w innej Europie, w innym świecie, gdzie prawa rządzące rzeczywistością bliższe ...",
      image: innePiesni,
      price: "20zł",
    },
    {
      id: 4,
      title: "Buty Nike nr. 42",
      desc:
        "Uzyte moze 10 razy - minimalne za male na moja stope, korki gumowe. Uzyte moze 10 razy - minimalne za male na moja stope, korki gumowe                                                   ",
      image: butyNike,
      price: "30zł",
    },
    {
      id: 5,
      title: "Zbior ksiazek po angielsku",
      desc:
        " Diuna po angielsku mnie przerosła; The Silence Of The Lambs - Koniec końców mnie nie zainteresowało; reszta to jakieś randomy",
      image: english,
      price: "25zł",
    },
    {
      id: 6,
      title: "Sezon Burz - Andrzej Sapkowski",
      desc:
        "To nowy Sapkowski i nowy wiedźmin. Mistrz polskiej fantastyki znowu zaskakuje. „Sezon burz” nie opowiada bowiem o młodzieńczych latach białowłosego zabójcy potworów ani o jego losach po śmierci/nieśmierci kończącej ostatni tom sagi.",
      image: sezonBurz,
      price: "10zł",
    },
  ],
};

const rootReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.SET_MODAL_OPEN:
      return { ...state, isModalOpen: payload };
    case types.SET_MODAL_CLOSE:
      return { ...state, isModalOpen: payload };
    case types.SET_BUY_COUNTER:
      return { ...state, setBuyCounter: state.setBuyCounter + payload };

    default:
      return state;
  }
};

export default rootReducer;
