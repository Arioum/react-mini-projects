import Pizza from "./Pizza"
import { pizzaData } from "../data"

const Menu = () => {
  const numPizzas = pizzaData.length;

  return (
    <main className="menu">
      <h2>Our menu</h2>
      <p>Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious.</p>
      {numPizzas > 0 ? (
        <ul className="pizzas">
          {pizzaData.map((pizza, index) => (
            <Pizza
              key={index}
              name={pizza.name}
              ingredients={pizza.ingredients}
              price={pizza.price}
              photoName={pizza.photoName}
              soldOut={pizza.soldOut}
            />
          ))}
        </ul>
      ) : (
        <p>We're still working on our menu. Please come back later.</p>
      )}
    </main>
  )
}

export default Menu