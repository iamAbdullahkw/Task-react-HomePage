import products from "../products";
const ProductList = () => {
  return (
    <>
      {products.map((product) => (
        <div className="center">
          <h2>{product.names}</h2>
          <h2>{product.price}</h2>
          <img src={product.Image} />
        </div>
      ))}
    </>
  );
};

export default ProductList;
