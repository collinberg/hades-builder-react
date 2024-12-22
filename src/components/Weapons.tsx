interface Props {
  name?: string;
  data: Weapon[] | Aspect[];
  onItemClick : (weapon: number) => void;
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
    const item = event.currentTarget.getAttribute('data-id');
    if (item) {
      onItemClick(Number(item));
    }
  };

  return (
    <section id='weapons' className=''>
        <h2> Select {name}</h2>
        <ul className='nav weapon-nav'>

          {data.map((weapon, index: number) => (
            <li 
              className='nav-item' 
              data-id={index}
              key={index}
              role="button"
              onClick={handleClick}
            >
              <img src={weapon.img}/>
              {weapon.name}
          </li>
          ))}
        </ul>
    </section>
  )
}

export default Weapons;