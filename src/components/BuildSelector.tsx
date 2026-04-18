import { Boon, Weapon, Aspect } from "../App";
import { weaponsData } from "../data/Weapons";

export interface Props {
  children: string;
  attribute: Boon | string;
  onClick: () => void;
  weaponData?: string;
}

const BuildSelector = ({
  attribute,
  weaponData,
  children = "Select Aspect",
  onClick,
}: Props) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  let displayAttribute: Weapon | Aspect | Boon | any = [];

  switch (children) {
    case "Weapon":
      displayAttribute = weaponsData.find((weapon) => weapon.id === attribute);
      break;

    case "Aspect":
      const weapon = weaponsData.find((weapon) => weapon.id === weaponData);
      displayAttribute = weapon?.aspects.find(
        (aspect) => aspect.id === attribute
      );
      console.log(weaponsData[1].aspects);
      break;
    default:
      displayAttribute = attribute;
  }

  return (
    <>
      {displayAttribute?.id ? (
        <div
          className='current__aspect selected'
          role='button'
          onClick={handleClick}
          key={displayAttribute.id}
        >
          <div className='weapon-icon'>
            <img src={displayAttribute.img} alt={displayAttribute.name} />
          </div>
          <span>{displayAttribute.name}</span>
        </div>
      ) : (
        <div
          className='current__aspect no_selection'
          role='button'
          onClick={handleClick}
        >
          <span>Select {children}</span>
        </div>
      )}
    </>
  );
};

export default BuildSelector;
