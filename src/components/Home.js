import BakeHouse from "../assets/download.jpeg";

const Home = () => {
  return (
    <>
      <div className="center">
        <h1>Welcome to your bakery</h1>
        <p> the best bakery in the world </p>
        <img src={BakeHouse} alt="bakery house" />
      </div>
    </>
  );
};

export default Home;
