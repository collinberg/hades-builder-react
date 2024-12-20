import { useState } from 'react';

interface Props {
    children ?: string;
    onClick ?: () => void;
}

const Aspect = ({children = "Select Aspect", onClick}: Props) => {

  const [aspect, setAspect] = useState('');

  const handleClick = () => {
    setAspect(children);
    if (onClick) {
      onClick();
    }
  };

  return (
    <div
      className='current__aspect no_selection'
      role="button"
      onClick={handleClick}>
        {!aspect && <span>Select {children}</span>}
    </div>
  )
}

export default Aspect