import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addProduct, removeProduct, clearCart } from "../features/CartSlice";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();

  return (
    <div className="w-screen bg-slate-200 h-full">
      <div className="p-10 flex justify-center items-center">
        <p className="font-serif font-bold">CART</p>
      </div>
      {
        cartItems.length === 0 ? (
            <div className="p-10 flex justify-center items-center">
                <p className="font-serif font-bold">No items in cart</p>
            </div>
        ):
        (
            <ul>
            {cartItems.map((item) => (
              <li key={item.id} className="border p-2 my-2 flex justify-between">
                <div>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-gray-700">₹{item.price}</p>
                </div>
              </li>
            ))}
          </ul>
        )
      }
    </div>
  );
};

export default Cart;
