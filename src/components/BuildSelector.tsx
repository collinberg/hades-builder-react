import {Boon, Weapon, Aspect} from "../App";
import {weaponsData} from "../data/Weapons";


export interface Props {
    children ?: string;
    attribute ?: Weapon | Aspect | Boon | string;
    onClick ?: () => void;
}

const BuildSelector = ({attribute, children = "Select Aspect", onClick}: Props) => {

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  
  if (typeof attribute === "string") {
      attribute = weaponsData.find((weapon) => weapon.id === attribute);
  }



  return (
    <>
      {attribute?.id ? (
          <div className='current__aspect selected' role="button" onClick={handleClick} key={attribute.id}>
            <div className="weapon-icon">
              <img src={attribute.img} alt={attribute.name} />
            </div>
            <span>{attribute.name}</span>
          </div>
        ) : (
          <div className='current__aspect no_selection' role="button" onClick={handleClick}>
            <span>Select {children}</span>
          </div>
        )}


</>
  )
}

export default BuildSelector