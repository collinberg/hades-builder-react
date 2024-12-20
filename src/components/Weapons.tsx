interface Props {
  name?: string;
  data: Weapon[];
  onItemClick : (weapon: string) => void;
}

interface Weapon {
  type: string;
  ID: string;
  name: string;
  img: string;
  aspects: Array<Aspect>;
}
interface Aspect {
  number: number;
  ID: string;
  name: string;
  img: string;
}

const Weapons = ({name, data, onItemClick} : Props) => {

  const handleClick = (event: React.MouseEvent<HTMLLIElement>) => {
    const item = event.currentTarget.getAttribute('data-weapon');
    if (item) {
      onItemClick(item);
    }
  };

  return (
    <section id='weapons' className=''>
        <h2> Select {name}</h2>
        <ul className='nav weapon-nav'>

          {data.map((weapon : Weapon, index: number) => (
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