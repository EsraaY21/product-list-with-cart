import { AppContext } from "../Context/AppContext";
import { useContext } from "react";
import RemoveIcon from "./icons/RemoveIcon";
import CarbonNeutralIcon from "./icons/CarbonNeutralIcon";

export default function Cart() {
  const { cartItems } = useContext(AppContext);

  return (
    <div className="cart">
      <h2 className="text-2">Your Cart ({cartItems.length})</h2>

      {cartItems.length > 0 ? (
        <div className="cart_items">
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

          <div className="sum">
            <p className="text">Order Total</p>
            <p className="price">$46.50</p>
          </div>

          <div className="note">
            <CarbonNeutralIcon />
            <p>This is a carbon-neutral delivery</p>
          </div>

          <button className="confirm_btn">Confirm Order</button>
        </div>
      ) : (
        <>
          <div className="empty">
            <img
              src="./assets/images/illustration-empty-cart.svg"
              alt="Cart Icon"
            />
            <p className="text-4">Your added items will appear here</p>
          </div>
        </>
      )}
    </div>
  );
}
