import Form from "./component/Form"
import Logo from "./component/Logo"
import PackingList from "./component/PackingList"
import Stats from "./component/Stats"

const App = () => {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  )
}

export default App