import { useNavigate } from "react-router-dom";
import { products } from "../assets/assets";

const Cards = () => {
  const navigate = useNavigate();
  
  return (
    <div className="bg-red-500 w-full pb-8">
      {/* Header */}
      <div className="flex justify-between px-9 sm:px-10 md:px-22 py-9">
        <div className="flex gap-6 items-center">
          <div className="bg-white p-3 h-fit rounded-full">go</div>
          <div>
            <h3 className="font-semibold text-2xl text-white">Flash Sale</h3>
            <p className="text--xl text-gray-300">Limited time offers</p>
          </div>
        </div>

        <div className="flex flex-col gap-1 bg-gray-400 py-2 px-4 md:py-2 md:px-6 rounded-lg">
          <h3 className="font-bold text-lg text-white">Ends in</h3>
          <p className="font-semibold text-lg text-white">04:23:15</p>
        </div>
      </div>

      {/* Product Grid */}
      <div className="w-full grid grid-cols-2 px-7 sm:px-7 md:px-19 lg:px-20 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.slice(0, 4).map((product) => (
          <div
            key={product.id}
            className="flex flex-col gap-1 rounded-lg bg-white px-3 group overflow-hidden hover:scale-105 transition-all duration-500"
          >
            <div className="relative shadow-[0_4px_10px_rgba(0,0,0,0.2)]">
              <img
                className="border-b-0 border-white group-hover:scale-105 transition-all duration-300"
                src={product.image}
                alt={product.name}
              />
              <div className="absolute top-1 left-2 text-white mt-2">
                <p className="animate-bounce px-3 font-semibold bg-red-600 rounded-2xl">
                  {product.discout}
                </p>
                <p className="px-3 font-semibold bg-yellow-500 text-black rounded-2xl">
                  2h 15m
                </p>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold mt-2 mb-2">{product.name}</p>
              <div className="flex justify-between mb-3">
                <div className="flex flex-col">
                  <p className="font-bold text-2xl text-red-600">₹{product.price}</p>
                  <p className="text-sm text-gray-500 line-through">₹{product.originalPrice}</p>
                </div>

                <button onClick={() => navigate(`/product/${product.id}`)} className="bg-red-600 text-white font-semibold rounded-lg h-9 px-2">
                  BUY NOW
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
