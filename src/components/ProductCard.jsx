import { useEffect, useState } from "react";
import axios from "axios";
import StarRatings from "react-star-ratings";
const ProductCard = () => {
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const getProducts = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/products");
      setData(res.data.products);
      console.log(res.data.products);
    } catch (error) {
      setError(alert(error.message));
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <h1 className="text-center text-3xl font-serif mt-5 text-[#A8763E] ">
        Products
      </h1>
      {error ? (
        <h1>{error}</h1>
      ) : (
        <div className=" m-10  ">
          <div className="grid grid-cols-auto-fit gap-10">
            {data.map((product) => (
              <div
                key={product.id}
                className="shadow-lg  shadow-neutral-400 rounded-lg bg-[#F7F3E3] ">
                <img
                  className="h-[70%] w-full bg-cover  rounded-lg"
                  src={product.thumbnail}
                  alt={product.title}
                />

                <div className="px-3 text-[#A8763E]  ">
                  <h2 className="py-2 font-medium">{product.title}</h2>
                  <StarRatings
                    rating={product.rating}
                    starDimension="20px"
                    starSpacing=" 5px"
                  />
                  <div className="flex justify-between">
                    <span className="pt-2 text-[#A8763E] text-lg">
                      ${product.price}
                    </span>
                    <button className="border-2 p-2 rounded-xl bg-[#A8763E] text-[#ECF0F1] ">
                      Add Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
export default ProductCard;
