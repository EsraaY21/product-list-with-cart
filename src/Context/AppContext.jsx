import { createContext, useState } from "react";
import data from "../data.json";

export const AppContext = createContext();

export default function AppProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (id) => {
    const dessert = data.find((item) => item.id === id);

    setCartItems((prevItems) => {
      return [...prevItems, { ...dessert, quantity: 1 }];
    });
  };

  return (
    <AppContext.Provider
      value={{ cartItems, setCartItems, handleAddToCart, data }}
    >
      {children}
    </AppContext.Provider>
  );
}
