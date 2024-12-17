import CartIcon from "./components/icons/CartIcon";
import data from "./data.json";

function App() {
  return (
    <>
      <main>
        <div className="desserts_container">
          <h1 className="text-1">Desserts</h1>
          <div className="dessert_list">
            {data.map((dessert, index) => (
              <div key={index} className="dessert_item">
                <img
                  src={dessert.image.desktop}
                  alt={dessert.name}
                  className="dessert_image"
                />
                <button className="add_to_cart text-4">
                  <CartIcon />
                  <span className="text-4">Add to Cart</span>
                </button>
                <p className="category text-4">{dessert.category}</p>
                <h3 className="name text-3">{dessert.name}</h3>
                <p className="price text-3">${dessert.price.toFixed(2)}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="cart">
          <h2 className="text-2">Your Cart (0)</h2>
          <img
            src="./assets/images/illustration-empty-cart.svg"
            alt="Cart Icon"
          />
          <p className="text-4">Your added items will appear here</p>
        </div>
      </main>
    </>
  );
}

export default App;
