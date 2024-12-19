import { createContext, useState } from "react";
import data from "../data.json";
import React from "react";

export const AppContext = createContext();

export default function AppProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const handleModalClose = () => {
    setOpenModal(false);
  };

  const handleModalOpen = () => {
    setOpenModal(true);
  };

  const handleCartUpdate = (id, action) => {
    const dessert = data.find((item) => item.id === id);

    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === id);

      switch (action) {
        case "add":
          if (existingItem) {
            return prevItems.map((item) =>
              item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            );
          }
          return [...prevItems, { ...dessert, quantity: 1 }];

        case "subtract":
          return prevItems
            .map((item) =>
              item.id === id ? { ...item, quantity: item.quantity - 1 } : item
            )
            .filter((item) => item.quantity > 0);

        case "remove":
          return prevItems.filter((item) => item.id !== id);

        default:
          return prevItems;
      }
    });
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <AppContext.Provider
      value={{
        cartItems,
        setCartItems,
        data,
        handleCartUpdate,
        handleModalOpen,
        openModal,
        handleModalClose,
        clearCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
