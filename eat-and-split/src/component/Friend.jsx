import Button from "./Button"

const Friend = ({ friend, selectedFriend, onSelection }) => {
  const isSelected = selectedFriend?.id === friend.id;
  const { name, image, balance } = friend;

  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      {balance < 0 && <p className="red">You owe {name} {Math.abs(balance)}€</p>}
      {balance > 0 && <p className="green">{name} owes you {Math.abs(balance)}€</p>}
      {balance === 0 && <p>You and {name} are even</p>}
      <Button onClick={() => onSelection(friend)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  )
}

export default Friend