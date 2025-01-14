interface Props {
  id: string;
  img: string;
  god: string;
  name: string
}

const Boon = ({id, img, god, name} : Props) => {
  return (
    <li data-god={god} key={id}>
      <img src={img} alt={name}/>
    </li>
  )
}

export default Boon