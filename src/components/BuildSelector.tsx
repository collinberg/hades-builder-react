interface Props {
    children ?: string;
    attribute ?: Weapon | Aspect;
    onClick ?: () => void;
}

interface Weapon {
  type: string;
  ID: string;
  name: string;
  img: string;
}

interface Aspect {
  number?: number;
  ID: string;
  name: string;
  img: string;
}

const BuildSelector = ({attribute, children = "Select Aspect", onClick}: Props) => {

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <>
        {attribute?.ID ? (
          <div className='current__aspect selected' role="button" onClick={handleClick}>
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