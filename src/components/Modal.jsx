import React from "react";
import OrderConfirmedIcon from "./icons/OrderConfirmedIcon";
import { AppContext } from "../Context/AppContext";
import { useContext } from "react";

export default function Modal() {
  const { cartItems } = useContext(AppContext);

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="modal_overlay">
      <div className="modal_box">
        <OrderConfirmedIcon />
        <h1 className="text-1">Order Confirmed</h1>
        <h2>We hope you enjoy your food!</h2>

        <div className="modal_box_cart">
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <div className="text-4">
                  <div className="image_box">
                    <img src={item.image.thumbnail} alt={item.name} />
                    <div>
                      <h4>{item.name}</h4>
                      <div className="details">
                        <span className="quantity">{item.quantity}x</span>
                        <span className="price">
                          @ ${item.price.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <span className="total">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </li>
            ))}
          </ul>

          <div className="sum">
            <p className="text">Order Total</p>
            <p className="price">${totalPrice.toFixed(2)}</p>
          </div>
        </div>

        <button className="start_new_btn">Confirm Order</button>
      </div>
    </div>
  );
}