import "./App.css";
import BakeHouse from "./assets/download.jpeg";
import products from "./products";

function App() {
  const myArray = products.map((product) => {
    return (
      <div>
        <h2>{product.names}</h2>
        <h2>{product.price}</h2>
        <img src={product.Image} />
      </div>
    );
  });

  return (
    <>
      <div className="center">
        <h1>Welcome to your bakery</h1>
        <p> the best bakery in the world </p>
        <img src={BakeHouse} alt="bakery house" />
      </div>
      <div>
        <h1></h1>
      </div>
      <div className="makeThisFlex">{myArray}</div>
    </>
  );
}

export default App;
