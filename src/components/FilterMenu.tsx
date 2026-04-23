import type { God } from "../context/BuildContext";
import { godSymbols } from "../data/gods";

interface Props {
  onFilterClick: (god: God) => void;
  activeGod: God | null;
}

const FilterMenu = ({ onFilterClick, activeGod }: Props) => {
  return (
    <section id='main-menu'>
      <ul className='nav type-nav'>
        {godSymbols.map((symbol, index) => (
          <button
            key={index}
            value={symbol.god}
            onClick={() => onFilterClick(symbol.god)}
            className={`nav-item ${symbol.god === activeGod ? "active" : ""}`}
          >
            <img src={symbol.img} alt={`${symbol.god} Symbol`} />
          </button>
        ))}
      </ul>
    </section>
  );
};

export default FilterMenu;
