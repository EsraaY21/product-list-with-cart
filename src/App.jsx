import { useState } from "react";
import CartIcon from "./components/icons/CartIcon";
import data from "./data.json";
import PlusIcon from "./components/icons/PlusIcon";
import MinusIcon from "./components/icons/MinusIcon";
import RemoveIcon from "./components/icons/RemoveIcon";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (id) => {
    const dessert = data.find((item) => item.id === id);

    setCartItems((prevItems) => {
      return [...prevItems, { ...dessert, quantity: 1 }];
    });

    console.log(cartItems);
  };

  return (
    <>
      <main>
        <div className="desserts_container">
          <h1 className="text-1">Desserts</h1>
          <div className="dessert_list">
            {data.map((dessert) => {
              const cartItem = cartItems.find((item) => item.id === dessert.id);
              return (
                <div key={dessert.id} className="dessert_item">
                  <picture>
                    <source
                      srcSet={dessert.image.mobile}
                      media="(max-width: 375px)"
                    />
                    <source
                      srcSet={dessert.image.tablet}
                      media="(max-width: 768px)"
                    />
                    <img
                      src={dessert.image.desktop}
                      alt={dessert.name}
                      className="dessert_image"
                    />
                  </picture>

                  <div className="cart_btn_container">
                    <button
                      className={`add_to_cart  ${
                        cartItem ? "hidden" : "visible"
                      }`}
                      onClick={() => handleAddToCart(dessert.id)}
                    >
                      <CartIcon />
                      <span className="text-4">Add to Cart</span>
                    </button>

                    <div
                      className={`update_cart ${
                        cartItem ? "visible" : "hidden"
                      }`}
                    >
                      <MinusIcon />
                      <span>{cartItem?.quantity || 1}</span>
                      <PlusIcon />
                    </div>
                  </div>

                  <p className="category text-4">{dessert.category}</p>
                  <h3 className="name text-3">{dessert.name}</h3>
                  <p className="price text-3">${dessert.price.toFixed(2)}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="cart">
          <h2 className="text-2">Your Cart ({cartItems.length})</h2>

          {cartItems.length > 0 ? (
            <ul>
              {cartItems.map((item) => (
                <li key={item.id}>
                  <div className="text-4">
                    <h4>{item.name}</h4>
                    <div className="details">
                      <span className="quantity">{item.quantity}x</span>
                      <span className="price">@ ${item.price}</span>
                      <span className="total">
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                  <RemoveIcon />
                </li>
              ))}
            </ul>
          ) : (
            <>
              <img
                src="./assets/images/illustration-empty-cart.svg"
                alt="Cart Icon"
              />
              <p className="text-4">Your added items will appear here</p>
            </>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
