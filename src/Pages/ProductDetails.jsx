import { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { FiShare } from 'react-icons/fi';
import { useNavigate, useParams } from 'react-router-dom';
import { products } from '../assets/assets'; // Your products array

import { useDispatch, useSelector } from 'react-redux';
import { addToCart, selectCartItems } from '../redux/cartSlice/cart';

const ProductDetail = () => {

 const dispatch = useDispatch();

 const cartItems = useSelector(selectCartItems);
 console.log( "cart items are = " , cartItems);

 const handleAddToCart = ()=>{
  dispatch(addToCart(product));
 }

  const { id } = useParams();

  const product = products.find(p => p.id === parseInt(id));
  const navigate = useNavigate();

  const [showImage, setShowImage] = useState(product?.image);
  const [activeTab, setActiveTab] = useState("description");
  const [quantity, setQuantity] = useState(1);

  if (!product) return <h2 className="text-center mt-20">Product Not Found</h2>;

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <div className='px-8 py-1 md:px-13 lg:px-22 bg-pink-50'>
      
      {/* nav */}
      <div className='flex justify-between items-center mt-4 sticky top-0 z-50 bg-pink-50 py-4 border-b border-0 border-pink-100'>
        <div onClick={() => navigate(-1)} className='text-sm font-semibold hover:bg-orange-600 hover:text-white transition-all duration-500 py-2 rounded cursor-pointer'>
          ← <span>Back</span>
        </div>
        <div className="top-2 flex gap-4">
          <FaHeart className="text-gray-500 text-xl hover:text-white hover:bg-orange-600 cursor-pointer transition " />
          <FiShare className="text-gray-600 text-xl hover:text-blue-600 hover:bg-orange-600 cursor-pointer transition" />
        </div>
      </div>

      {/* product */}
      <div className='flex flex-col lg:flex-row'>

        {/* left side */}
        <div className='flex flex-col w-full lg:w-1/2 h-full mb-7 lg:mr-3 gap-6 pt-8 lg:pt-16'>
          <div className='shadow-[0_-12px_20px_0_rgba(190,190,210,1)]'>
            <img src={showImage} alt="" />
          </div>

          <div className='flex gap-1 overflow-hidden'>
            {[product.image, product.image2, product.image3, product.image4].map((img, index) => (
              <img
                key={index}
                src={img} alt=""
                className='w-1/4 h-34 cursor-pointer hover:scale-105 transition-all duration-300'
                onClick={() => setShowImage(img)}
              />
            ))}
          </div>
        </div>

        {/* right side */}
        <div className='flex flex-col w-full lg:w-1/2 h-full mb-7 gap-2 pt-2 lg:mt-4'>
          <div className='flex gap-3'>
            <p className='text-sm font-bold text-green-700 bg-green-100 px-4 rounded-2xl'>Factory Direct</p>
            <p className='text-sm font-bold text-green-700 bg-green-100 px-4 rounded-2xl'>In Stock (156)</p>
          </div>

          <div>
            <h2 className='text-2xl font-bold'>{product.name}</h2>
            <p className='mt-3 mb-4 font-semibold'>{product.Rating} <span className='text-gray-500 font-normal'>{product.Review}</span></p>
            <p className='text-2xl font-bold space-x-3'>{product.price} <span className='line-through text-lg text-gray-500 '>{product.originalPrice} </span> <span className='text-sm font-semibold bg-green-600 px-3 rounded-2xl text-white'>{product.discount}</span></p>
          </div>

          <div className='bg-orange-100 flex flex-col gap-2 p-4 mt-3 rounded-2xl border border-orange-200'>
            <h4 className='font-semibold text-lg'>Bulk Pricing Available</h4>
            <div className='flex justify-between '>
              <div>
                <p>10+ units</p>
                <p>50+ units</p>
                <p>100+ units</p>
              </div>
              <div className='font-semibold'>
                <p>{product.price} each <span>{product.discount}</span></p>
                <p>{product.price} each <span>{product.discount} </span></p>
                <p>{product.price} each <span>{product.discount} </span></p>
              </div>
            </div>
          </div>

          {/* Quantity + Buttons */}
          <div className='flex flex-col gap-2 mt-3'>
            <div className='flex gap-2 items-center'>
              <p className='font-semibold text-lg'>Quantity:</p>
              <div className='flex gap-2 p-3 w-[20%] border border-gray-200 rounded-2xl justify-between items-center'>
                <button onClick={decreaseQuantity} className='text-xl font-bold'>-</button>
                <p className='text-xl font-semibold'>{quantity}</p>
                <button onClick={increaseQuantity} className='text-xl font-bold'>+</button>
              </div>
            </div>

            <div className='flex gap-4 w-full mt-4'>
              <div onClick={()=>handleAddToCart(product)} className='flex gap-3 w-1/2 bg-blue-600 justify-center text-white py-3 rounded-lg'>
                <p>🛒</p>
                <p className='font-semibold'>Add to Cart</p>
              </div>
              <div className='flex gap-3 items-center w-1/2 bg-orange-600 text-white justify-center py-3 rounded-lg'>
                <p>📩</p>
                <p className='font-semibold'>Request Quote</p>
              </div>
            </div>
          </div>

          {/* Manufacturer */}
          <div className='mt-4 px-5 py-3 flex gap-4 bg-blue-100 rounded-lg border border-gray-300'>
            <div>🏭</div>
            <div className='flex flex-col gap-1'>
              <h4 className='font-semibold text-lg'>AudioTech Manufacturing</h4>
              <p className='text-gray-500 text-sm font-semibold'>Shenzhen, China</p>
              <p className='text-gray-500 text-sm font-semibold'>Response time: less than 2 hours</p>
              <p className='text-gray-500 text-sm font-semibold'>4.9 rating • 12 years in business</p>
              <button className='bg-white py-1 px-4 rounded-lg border-1 border-gray-200 mt-1 text-gray-900'>Contact Manufacturer</button>
            </div>
          </div>

          {/* Trust Badges */}
          <div className='flex flex-col lg:flex-row gap-4 mt-5 w-full'>
            {[
              { title: "Free Shipping", desc: "On orders over $75" },
              { title: "Easy Returns", desc: "30-day policy" },
              { title: "Warranty", desc: "2 years factory" },
            ].map((item, i) => (
              <div key={i} className='flex gap-4 w-full border border-gray-200 rounded-lg py-2 px-5'>
                <p>✅</p>
                <div>
                  <h5 className='font-semibold'>{item.title}</h5>
                  <p className='text-gray-500 text-sm'>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className='mt-6 mb-3 flex flex-col gap-4 pb-6 relative'>
        <div className='flex gap-2 w-full bg-gray-200 rounded-lg py-2 justify-center'>
          {['description', 'specs', 'reviews'].map((tab) => (
            <div
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`font-semibold cursor-pointer w-[30%] text-center py-1 rounded transition-all duration-300 ${
                activeTab === tab ? "bg-white shadow text-black" : "text-gray-600 hover:text-black"
              }`}
            >
              {tab === 'description' && 'Description'}
              {tab === 'specs' && 'Specifications'}
              {tab === 'reviews' && `Reviews ${product.Review}`}
            </div>
          ))}
        </div>

        {/* Tab Contents */}
        {activeTab === "description" && (
          <div className='flex flex-col gap-3 mt-5 py-4 px-8 bg-green-100 border border-gray-200 rounded-lg'>
            <h3 className='font-semibold text-lg'>Product Description</h3>
            <p className='text-gray-700'>{product.Description}</p>
            <div className='w-1/4 lg:w-[16%] flex flex-col gap-2'>
              <h3 className='font-semibold text-lg'>Key Features</h3>
              <p className='text-lg text-gray-950'>{product.Feature}</p>
            </div>
          </div>
        )}

        {activeTab === "specs" && (
          <div className='flex flex-col gap-2 mt-5 bg-gray-100 border border-gray-300 p-5 rounded-lg'>
            <h3 className='font-semibold text-lg mb-2'>Technical Specifications</h3>
            {[...Array(6)].map((_, i) => (
              <div key={i}>
                <p className='font-medium'>Driver Size</p>
                <p className='text-gray-700'>40mm Dynamic Drivers</p>
                <hr className='my-2' />
              </div>
            ))}
          </div>
        )}

        {activeTab === "reviews" && (
          <div className='flex flex-col gap-2 mt-5 bg-blue-100 border border-blue-300 p-5 rounded-lg'>
            <h3 className='font-semibold text-lg'>User Reviews</h3>
            <p className='text-gray-700'>⭐ {product.Rating} — Based on {product.Review} reviews.</p>
            <p className='text-sm text-gray-600'>Customer feedback will be shown here.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
