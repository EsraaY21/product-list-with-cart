import { AppContext } from "../Context/AppContext";
import { useContext } from "react";
import CartIcon from "./icons/CartIcon";
import PlusIcon from "./icons/PlusIcon";
import MinusIcon from "./icons/MinusIcon";

export default function ProductCard({ dessert }) {
  const { cartItems, handleAddToCart } = useContext(AppContext);

  const cartItem = cartItems.find((item) => item.id === dessert.id);

  return (
    <div className="dessert_item">
      <picture>
        <source srcSet={dessert.image.mobile} media="(max-width: 375px)" />
        <source srcSet={dessert.image.tablet} media="(max-width: 768px)" />
        <img
          src={dessert.image.desktop}
          alt={dessert.name}
          className="dessert_image"
        />
      </picture>

      <div className="cart_btn_container">
        <button
          className={`add_to_cart  ${cartItem ? "hidden" : "visible"}`}
          onClick={() => handleAddToCart(dessert.id)}
        >
          <CartIcon />
          <span className="text-4">Add to Cart</span>
        </button>

        <div className={`update_cart ${cartItem ? "visible" : "hidden"}`}>
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
}
