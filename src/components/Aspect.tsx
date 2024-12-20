import { useState } from 'react';

interface Props {
    children ?: string;
    attribute ?: string;
    onClick ?: () => void;
}

const Aspect = ({attribute, children = "Select Aspect", onClick}: Props) => {

  const [aspect, setAspect] = useState('');

  if(attribute) {
    setAspect(attribute);
  }

  const handleClick = () => {
    //setAspect(children);
    if (onClick) {
      onClick();
    }
  };

  return (
    <div
      className='current__aspect no_selection'
      role="button"
      onClick={handleClick}>
        {!attribute ? <span>{children}</span>
        
        : <span>{aspect}</span>}
    </div>
  )
}

export default Aspect