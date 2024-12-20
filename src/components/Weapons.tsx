import {weaponsData} from "../data/Weapons"

interface Props {
  name?: string;
  onWeaponClick : (weapon: string) => void;
}

const Weapons = ({name, onWeaponClick} : Props) => {

  const handleClick = (event: React.MouseEvent<HTMLLIElement>) => {
    const item = event.currentTarget.getAttribute('data-weapon');
    if (item) {
      onWeaponClick(item);
    }
  };

  return (
    <section id='weapons' className=''>
        <h2> Select {name}</h2>
        <ul className='nav weapon-nav'>

          {weaponsData.map((weapon, index) => (
            <li className='nav-item' data-weapon={weapon.type} key={index} role="button" onClick={handleClick} >
              <img src={weapon.img}/>
              {weapon.name}
          </li>
          ))}
        </ul>
    </section>
  )
}

export default Weapons