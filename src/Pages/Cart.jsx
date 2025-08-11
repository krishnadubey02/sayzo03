import { useState } from "react";
import toast from "react-hot-toast";
import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
  selectCartItems,
  selectcartTotalPrice,
} from "../redux/cartSlice/cart.jsx";

const Cart = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectcartTotalPrice);

  const [promoCode, setPromoCode] = useState("");
  const [discountPercent, setDiscountPercent] = useState(0);

  const tax = totalPrice * 0.18;
  const afterTaxPrice = totalPrice + tax;

  // Apply promo discount after tax
  const finalPrice = afterTaxPrice - (afterTaxPrice * discountPercent) / 100;

  const handleApplyPromo = () => {
    if (promoCode.trim().toUpperCase() === "DISCOUNT10") {
      setDiscountPercent(10);
      toast.success("Promo code applied! You got 10% off 🎉");
    } else {
      setDiscountPercent(0);
      toast.error("Invalid promo code ❌");
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8">
        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-6">Shopping Cart</h2>
          <p className="text-gray-600">Your cart is currently empty.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col lg:flex-row gap-8  ">
         
      {/* Left Side - Cart Items */}
      <div className="flex-1">
        <h2 className="text-2xl font-bold mb-6">
          Shopping Cart — {cartItems.length}
        </h2>
        <div className="flex flex-col gap-6">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border rounded-lg p-4 shadow-sm bg-green-50"
            >
              {/* Product Info */}
              <div className="flex gap-4 items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded-md"
                />
                <div className="flex flex-col">
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-gray-500 text-sm">{item.brand}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-xs">
                      In Stock
                    </span>
                    <span className="text-gray-500 text-xs">
                      3-5 days delivery
                    </span>
                  </div>
                </div>
              </div>

              {/* Price + Quantity + Remove */}
              <div className="flex flex-col items-end gap-3">
                <p className="font-semibold text-lg">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
                <div className="flex items-center gap-3">
                  <button
                    className="px-2 py-1 border rounded"
                    onClick={() => dispatch(decrementQuantity(item.id))}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    className="px-2 py-1 border rounded"
                    onClick={() => dispatch(incrementQuantity(item.id))}
                  >
                    +
                  </button>
                </div>
                <FaTrash
                  className="text-red-600 cursor-pointer"
                  onClick={() => {
                    dispatch(removeFromCart(item.id));
                    toast.success("Product removed from cart");
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Side - Order Summary */}
      <div className="w-full lg:w-1/3 border rounded-lg p-6 shadow-sm h-fit bg-green-50">
     
        <h2 className="text-xl font-bold mb-4">Order Summary</h2>
        <div className="flex justify-between mb-2">
          <span>Subtotal ({cartItems.length} items)</span>
          <span className="font-semibold">${totalPrice.toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-2 text-green-600">
          <span>Factory Direct Savings</span>
          <span>- ${(totalPrice * 0.25).toFixed(2)}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span>Shipping</span>
          <span className="text-green-600">Free</span>
        </div>
        <div className="flex justify-between mb-4">
          <span>Tax</span>
          <span>${tax.toFixed(2)} (18%)</span>
        </div>
        {discountPercent > 0 && (
          <div className="flex justify-between mb-4 text-green-600">
            <span>Promo Discount ({discountPercent}%)</span>
            <span>- ${(afterTaxPrice * discountPercent / 100).toFixed(2)}</span>
          </div>
        )}
        <hr className="mb-4" />
        <div className="flex justify-between text-lg font-bold mb-4">
          <span>Total</span>
          <span className="text-blue-600">${finalPrice.toFixed(2)}</span>
        </div>

        <div className="flex gap-2 mb-3">
          <input
            type="text"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            placeholder="Enter promo code"
            className="w-full border rounded px-3 py-2"
          />
          <button
            onClick={handleApplyPromo}
            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded cursor-pointer"
          >
            Apply
          </button>
        </div>

        <button
          onClick={() => navigate("/payment")}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded mb-3 cursor-pointer"
        >
          Proceed to Checkout
        </button>
        <button
          onClick={() => navigate("/")}
          className="w-full border py-2 rounded hover:bg-gray-600 hover:text-white cursor-pointer"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default Cart;
