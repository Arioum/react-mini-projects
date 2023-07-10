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

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} onDeleteItems={handleDeleteItems} />
      <Stats />
    </div>
  )
}

export default App