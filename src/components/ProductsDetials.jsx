const ProductsDetials = () => {
  return (
    <div className="bg-[#E9EBF8]  h-[600px] flex flex-wrap gap-2">
      <div className="border-8 h-max-[400px] w-[400px]   overflow-hidden  ">
        <img
          className="w-full"
          src="/src/assets/photo-1610391547035-b4541ce32da0.avif"
          alt=""
        />
      </div>
      <div className="border-8">
        <h1 className="text-black">Products Title</h1>
        <p>
          Product Description Lorem ipsum dolor sit amet consectetur adipisicing
          elit.
        </p>
        <p>Price</p>
        <div className=" flex  space-x-3 py-3">
          <button className="border-2 p-2 rounded-xl bg-[#A8763E] text-[#ECF0F1] w-[80px]">
            +
          </button>
          <p className="flex items-center">Quantity:</p>
          <button className="border-2 p-2 rounded-xl bg-[#A8763E] text-[#ECF0F1] w-[80px] ">
            -
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductsDetials;
