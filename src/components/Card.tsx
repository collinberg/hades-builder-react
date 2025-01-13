
interface Props {
    ID: number;
    name: string;
    description: string;
    img : string;
    god: string;
    onClick?: () => void;
    disabled?: boolean;
}

const Card = ({ID, name = "Boon Name", description = "No Description Available",  img, god, onClick, disabled} : Props) => {

    const handleClick = () => {
        if (onClick) {
          onClick();
        }
      };

  return (
    <div className={`boon-card lg:max-w-sm p-6 border border-gray-200 rounded-lg shadow ${disabled ? ' disabled' : ''}`} key={ID.toString()} data-god={god} onClick={!disabled ? handleClick : undefined}>
        <div className='card-head w-1/3'>
            <div className='gods'>
                <img src={img}/>
            </div>
         </div>
        <div className='card-main w-2/3'>
            <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h3>
            <p className="font-normal text-gray-700 dark:text-gray-400">{description}</p>
        </div>
        {disabled && <div className='card-overlay'>This Boon Requirement is not met.</div>}
    </div>
  )
}

export default Card