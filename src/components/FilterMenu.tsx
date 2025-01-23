import Zeus_symbol from '../assets/img/symbols/Zeus_symbol.webp';
import Poseidon_symbol from '../assets/img/symbols/Poseidon_symbol.webp';
import Athena_symbol from '../assets/img/symbols/Athena_symbol.webp';
import Ares from '../assets/img/symbols/Ares_symbol.webp';

import Artemis_symbol from '../assets/img/symbols/Artemis_symbol.webp';
import Demeter_symbol from '../assets/img/symbols/Demeter_symbol.webp';
import Dionysus_symbol from '../assets/img/symbols/Dionysus_symbol.webp';
import Aphrodite_symbol from '../assets/img/symbols/Aphrodite_symbol.webp';


const symbols = [
  { god: 'Zeus', img: Zeus_symbol },
  { god: 'Poseidon', img: Poseidon_symbol },
  { god: 'Athena', img: Athena_symbol },
  { god: 'Ares', img: Ares },
  { god: 'Artemis', img: Artemis_symbol },
  { god: 'Demeter', img: Demeter_symbol },
  { god: 'Dionysus', img: Dionysus_symbol },
  { god: 'Aphrodite', img: Aphrodite_symbol },
];

interface Props {
  onFilterClick : (god : string) => void;
  activeGod : string | null;
}

const FilterMenu = ({onFilterClick, activeGod} : Props) => {



  return (
    <section id='main-menu'>
        <ul className='nav type-nav'>

        {symbols.map((symbol, index) => (
          <button 
            key={index}
            value={symbol.god}
            onClick={() => onFilterClick(symbol.god)}
            className={`nav-item ${
              symbol.god === activeGod 
                ? 'active'
                : ''
            }`}
          >
            <img src={symbol.img} alt={`${symbol.god} Symbol`} />
          </button>
        ))}

        </ul>
    </section>
  )
}

export default FilterMenu