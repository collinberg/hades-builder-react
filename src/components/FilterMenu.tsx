import Zeus_symbol from '../assets/img/symbols/Zeus_symbol.webp';
import Poseidon_symbol from '../assets/img/symbols/Poseidon_symbol.webp';
import Athena_symbol from '../assets/img/symbols/Athena_symbol.webp';
import Ares from '../assets/img/symbols/Ares_symbol.webp';

import Artemis_symbol from '../assets/img/symbols/Artemis_symbol.webp';
import Demeter_symbol from '../assets/img/symbols/Demeter_symbol.webp';
import Dionysus_symbol from '../assets/img/symbols/Dionysus_symbol.webp';
import Aphrodite_symbol from '../assets/img/symbols/Aphrodite_symbol.webp';


const FilterMenu = () => {
  return (
    <section id='main-menu'>
        <ul className='nav type-nav'>
            <li><img src={Zeus_symbol}/></li>
            <li><img src={Poseidon_symbol} /></li>
            <li><img src={Athena_symbol} /></li>
            <li><img src={Ares}/></li>
            <li><img src={Artemis_symbol}/></li>
            <li><img src={Demeter_symbol} /></li>
            <li><img src={Dionysus_symbol} /></li>
            <li><img src={Aphrodite_symbol}/></li>
        </ul>
    </section>
  )
}

export default FilterMenu