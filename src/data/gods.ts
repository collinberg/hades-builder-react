import Zeus_symbol from '../assets/img/symbols/Zeus_symbol.webp';
import Poseidon_symbol from '../assets/img/symbols/Poseidon_symbol.webp';
import Athena_symbol from '../assets/img/symbols/Athena_symbol.webp';
import Ares_symbol from '../assets/img/symbols/Ares_symbol.webp';
import Artemis_symbol from '../assets/img/symbols/Artemis_symbol.webp';
import Demeter_symbol from '../assets/img/symbols/Demeter_symbol.webp';
import Dionysus_symbol from '../assets/img/symbols/Dionysus_symbol.webp';
import Aphrodite_symbol from '../assets/img/symbols/Aphrodite_symbol.webp';
import Hermes_symbol from '../assets/img/symbols/Hermes_symbol.webp';

import type { God } from '../context/BuildContext';

export type GodSymbol = { god: God; img: string };

export const godSymbols: GodSymbol[] = [
  { god: 'Zeus',      img: Zeus_symbol      },
  { god: 'Poseidon',  img: Poseidon_symbol  },
  { god: 'Athena',    img: Athena_symbol    },
  { god: 'Ares',      img: Ares_symbol      },
  { god: 'Artemis',   img: Artemis_symbol   },
  { god: 'Demeter',   img: Demeter_symbol   },
  { god: 'Dionysus',  img: Dionysus_symbol  },
  { god: 'Aphrodite', img: Aphrodite_symbol },
  { god: 'Hermes',    img: Hermes_symbol    },
];
