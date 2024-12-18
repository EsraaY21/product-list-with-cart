import { useState } from "react";
import CartIcon from "./components/icons/CartIcon";
import data from "./data.json";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (id) => {
    const dessert = data.find((item) => item.id === id);

    setCartItems((prevItems) => {
      return [...prevItems, { ...dessert, quantity: 1 }];
    });
  };

  return (
    <>
      <main>
        <div className="desserts_container">
          <h1 className="text-1">Desserts</h1>
          <div className="dessert_list">
            {data.map((dessert, index) => (
              <div key={index} className="dessert_item">
                <picture>
                  {/* Mobile image (375px and below) */}
                  <source
                    srcSet={dessert.image.mobile}
                    media="(max-width: 375px)"
                  />
                  {/* Tablet image (376px to 768px) */}
                  <source
                    srcSet={dessert.image.tablet}
                    media="(max-width: 768px)"
                  />
                  {/* Desktop image (default fallback) */}
                  <img
                    src={dessert.image.desktop}
                    alt={dessert.name}
                    className="dessert_image"
                  />
                </picture>
                <button
                  className="add_to_cart text-4"
                  onClick={() => handleAddToCart(dessert.id)}
                >
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
          <h2 className="text-2">Your Cart ({cartItems.length})</h2>
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
