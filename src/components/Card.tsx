import { ReactNode } from 'react'
import Aphrodites_Aid from '../assets/img/_boons/Aphrodites_Aid.webp';


interface Props {
    children?: ReactNode;
    name : string;

}

const Card = ({children, name = "Boon Name"} : Props) => {
  return (
    <div className='boon-card block max-w-sm p-6 border flex row border-gray-200 rounded-lg shadow'>
        <div className='card-head w-1/3'>
            <div className='gods'>
                <img src={Aphrodites_Aid}/>
            </div>
         </div>
        <div className='card-main w-2/3'>
            <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h3>
            <p className="font-normal text-gray-700 dark:text-gray-400">Your Doom effects continuously strike Weak foes.</p>
        </div>
    </div>
  )
}

export default Card