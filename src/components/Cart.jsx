import { AppContext } from "../Context/AppContext";
import { useContext } from "react";
import RemoveIcon from "./icons/RemoveIcon";
import CarbonNeutralIcon from "./icons/CarbonNeutralIcon";

export default function Cart() {
  const { cartItems, handleCartUpdate, handleModalOpen } =
    useContext(AppContext);

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart">
      <h2 className="text-2">Your Cart ({totalQuantity})</h2>

      {cartItems.length > 0 ? (
        <div className="cart_items">
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <div className="text-4">
                  <h4 className="ellipsis">{item.name}</h4>
                  <div className="details">
                    <span className="quantity">{item.quantity}x</span>
                    <span className="price">@ ${item.price.toFixed(2)}</span>
                    <span className="total">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>
                <div
                  className="icon-container"
                  onClick={() => handleCartUpdate(item.id, "remove")}
                >
                  <RemoveIcon />
                </div>
              </li>
            ))}
          </ul>

          <div className="sum">
            <p className="text">Order Total</p>
            <p className="price">${totalPrice.toFixed(2)}</p>
          </div>

          <div className="note">
            <CarbonNeutralIcon />
            <p className="text-4">
              This is a <span>carbon-neutral</span> delivery
            </p>
          </div>

          <button className="confirm_btn" onClick={() => handleModalOpen()}>
            Confirm Order
          </button>
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
