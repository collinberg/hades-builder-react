
interface Props {
    id: string;
    name: string;
    description: string;
    img : string;
    god: string;
    prerequisites?: string[] | [];
    onClick?: () => void;
    disabled?: boolean;
}

const Card = ({id, name = "Boon Name", description = "No Description Available",  img, god, onClick, disabled,prerequisites} : Props) => {
    const handleClick = () => {
        if (onClick) {
          onClick();
        }
      };

  return (
    <div className={`boon-card lg:max-w-sm p-6 border border-gray-200 rounded-lg shadow ${disabled ? ' disabled' : ''}`} key={id.toString()} data-god={god} onClick={!disabled ? handleClick : undefined}>
        <div className='card-head w-1/3'>
            <div className='gods'>
                <img src={img}/>
            </div>
         </div>
        <div className='card-main w-2/3'>
            <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h3>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {` ${!disabled ? description : 'This Boon Requirement is not met.'}`}
            </p>

          {disabled && <p className="font-normal text-gray-700 dark:text-gray-400 mt-2 pb-1">Requires one of the following: </p>}  
          <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
          {disabled && prerequisites && prerequisites.map((req, index) => (
            
            <li key={index} className="text-sm pl-1">{req}</li>
          
          ))}
          </ul>

        </div>
    </div>
  )
}

export default Card