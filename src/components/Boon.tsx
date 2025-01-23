interface Props {
  id: string;
  img: string;
  god: string;
  name: string;
}

const Boon = ({id, img, god, name} : Props) => {
  return (
    <li className={`boon-item`} data-god={god} key={id}>
      <img src={img} alt={name}/>
      {/* <div className="boon-interface">
        <button>Remove</button>
      </div> */}
    </li>
  )
}

export default Boon