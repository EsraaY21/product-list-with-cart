import Cart from "./components/Cart";
import Modal from "./components/Modal";
import ProductCard from "./components/ProductCard";
import { AppContext } from "./Context/AppContext";
import { useContext } from "react";

function App() {
  const { data } = useContext(AppContext);

  return (
    <>
      <main>
        <div className="desserts_container">
          <h1 className="text-1">Desserts</h1>
          <div className="dessert_list">
            {data.map((dessert) => {
              return <ProductCard dessert={dessert} key={dessert.id} />;
            })}
          </div>
        </div>
        <Cart />
      </main>

      <Modal />
    </>
  );
}

export default App;
