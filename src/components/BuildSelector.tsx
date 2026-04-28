import type { Boon, Weapon, Aspect } from "../context/BuildContext";
import { weaponsData } from "../data/weapons";
import { boons } from "../data/boons";

export interface Props {
  children: string;
  attribute: string | null;
  onClick: () => void;
  weaponData?: string | null;
}

const BuildSelector = ({
  attribute,
  weaponData,
  children = "Select Aspect",
  onClick,
}: Props) => {
  let displayAttribute: Weapon | Aspect | Boon | undefined;

  switch (children) {
    case "Weapon":
      displayAttribute = weaponsData.find((weapon) => weapon.id === attribute);
      break;
    case "Aspect": {
      const weapon = weaponsData.find((weapon) => weapon.id === weaponData);
      displayAttribute = weapon?.aspects.find((aspect) => aspect.id === attribute);
      break;
    }
    default:
      displayAttribute = boons.find((b) => b.id === attribute);
  }

  return (
    <>
      {displayAttribute?.id ? (
        <div
          className='current__aspect selected'
          role='button'
          onClick={onClick}
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
          onClick={onClick}
        >
          <span>Select {children}</span>
        </div>
      )}
    </>
  );
};

export default BuildSelector;
