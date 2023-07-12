import { useState } from "react"
import Form from "./component/Form"
import Logo from "./component/Logo"
import PackingList from "./component/PackingList"
import Stats from "./component/Stats"

const App = () => {
  const [items, setItems] = useState([]);

  const handleAddItems = (item) => {
    setItems((items) => [...items, item]);
  }

  const handleDeleteItems = (id) => {
    setItems((items) => items.filter((item) => item.id !== id))
  }

  const handleToggleItem = (id) => {
    setItems((items) => items.map((item) =>
      item.id === id ? { ...item, packed: !item.packed } : item
    ))
  }

  const handleClearAllItems = () => {
    const confirmed = window.confirm("Are you sure you want to delete all items?")
    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} onDeleteItems={handleDeleteItems} onToggleItem={handleToggleItem} onClearItems={handleClearAllItems} />
      <Stats items={items} />
    </div>
  )
}

export default App