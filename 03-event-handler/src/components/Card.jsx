function Card(props) {

  const handleClick = (name) => {
    console.log("tesss click dari " + name)
  }

  const handleMouseOver = () => {
    console.log("ini di hover");
  }

  return (
    <div>
      <h2 onClick={() => handleClick("Auzan")}>{props.nama}</h2>
      <p onMouseOver={handleMouseOver}>{props.umur}</p>
    </div>
  )
}

export default Card