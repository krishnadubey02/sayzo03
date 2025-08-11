import { products } from '../assets/assets';

import { useNavigate } from 'react-router-dom';

const Trending = () => {
  const trendingProducts = products.filter(p => p.id >= 23 && p.id <= 26);

  const navigate = useNavigate();
  const handleProductClick = (product) => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div className="bg-white w-full pb-8 px-2 sm:px-5 md:px-7 lg:px-9">
      {/* Header */}
      <div className="flex flex-wrap justify-between items-center px-9 sm:px-10 md:px-16 py-6">
        <div className="flex gap-4 items-center">
          <div className="bg-white p-3 h-fit rounded-full">go</div>
          <div>
            <h3 className="font-semibold text-2xl text-black">Trending</h3>
            <p className="text-xl text-gray-600">Limited time offers</p>
          </div>
        </div>

        <div className="flex flex-col gap-1 bg-gray-400 py-2 px-4 md:py-2 md:px-6 rounded-lg mt-4 md:mt-0">
          <h3 className="font-bold text-lg text-white">Ends in</h3>
          <p className="font-semibold text-lg text-white">04:23:15</p>
        </div>
      </div>

      {/* Cards Grid */}
      <div className="px-7 sm:px-7 md:px-14 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5">
        {trendingProducts.map((product) => (
          <div
            key={product.id}
            className="flex flex-col gap-2 rounded-lg bg-white px-2 group overflow-hidden hover:scale-110 transition-all duration-500 border border-gray-300"
          >
            <div className="relative shadow-[0_4px_10px_rgba(0.2,0.3,0.3,0.2)]">
              <img
                className="border-b-0 border-white group-hover:scale-105 transition-all duration-300 rounded"
                src={product.image}
                alt={product.name}
              />
              <div className="absolute top-2 left-2 text-white space-y-1">
                <p className="animate-bounce px-3 font-semibold bg-red-600 rounded-2xl text-sm">
                  {product.discout}
                </p>
                <p className="px-3 font-semibold bg-yellow-500 text-black rounded-2xl text-sm">
                  2h 15m
                </p>
              </div>
            </div>

            <div>
              <p className="text-sm font-semibold mt-2 mb-2">{product.name}</p>
              <div className="flex justify-between items-center mb-3">
                <div className="flex flex-col">
                  <p className="font-bold text-2xl text-red-600">₹{product.price}</p>
                  <p className="text-sm text-gray-500 line-through">₹{product.originalPrice}</p>
                </div>
                <button onClick={() => handleProductClick(product)} className="bg-red-600 text-white font-semibold rounded-lg h-9 px-3 text-sm">
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

export default Trending;
