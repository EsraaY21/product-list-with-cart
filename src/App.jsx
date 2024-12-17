import data from "./data.json";

function App() {
  return (
    <>
      <main>
        <div className="">
          <h1 className="text-1">Desserts</h1>
          <div className="dessert_list">
            {data.map((dessert, index) => (
              <div key={index} className="dessert_item">
                <img
                  src={dessert.image.thumbnail}
                  alt={dessert.name}
                  className="dessert_image"
                />
                {/* <h2>{dessert.name}</h2> */}
                {/* <p>{dessert.category}</p> */}
                {/* <p>${dessert.price}</p> */}
              </div>
            ))}
          </div>
        </div>
        <div className="cart"></div>
      </main>
    </>
  );
}

export default App;

// Your Cart (<!-- Quantity -->)
// Your added items will appear here
