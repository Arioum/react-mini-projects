const Pizza = ({ name, photoName, ingredients, price, soldOu }) => {
  return (
    <li className="pizza">
      <img src={photoName} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{price + 0.99}</span>
      </div>
    </li>
  )
}

export default Pizza