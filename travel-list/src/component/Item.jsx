const Item = ({ item, onDeleteItem }) => {
  const { id, quantity, description, packed } = item;

  return (
    <li>
      <span style={packed ? { textDecoration: "line-through" } : {}}>
        {quantity} {description}
      </span>
      <button onClick={() => onDeleteItem(id)}>❌</button>
    </li>
  )
}

export default Item