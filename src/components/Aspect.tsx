
interface Props {
    children ?: string;
    attribute ?: string;
    onClick ?: () => void;
}

const Aspect = ({attribute, children = "Select Aspect", onClick}: Props) => {

  const handleClick = () => {
    //setAspect(children);
    if (onClick) {
      onClick();
    }
  };

  return (
    <div
      className={`current__aspect ${attribute ? 'selected' : 'no_selection'}`}
      role="button"
      onClick={handleClick}>
        {attribute ? (
          <span>{attribute}</span>
        ) : (
          <span>Select {children}</span>
        )}
    </div>
  )
}

export default Aspect