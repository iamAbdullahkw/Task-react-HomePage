import products from "../products";
import ProductsItem from "./ProductsItem";

const ProductList = () => {
  const myArray = products.map((product) => <ProductsItem product={product} />);
  return <div className="center">{myArray}</div>;
};

export default ProductList;

{
  /* <ProductsItem product={product} /> */
}
