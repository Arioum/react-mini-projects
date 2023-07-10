import Item from "./Item";

const PackingList = ({ items, onDeleteItems }) => {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item item={item} key={item.id} onDeleteItem={onDeleteItems}/>
        ))}
      </ul>
    </div>
  )
}

export default PackingList