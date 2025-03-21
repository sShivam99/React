import React from "react";
import { ProductProvider, useProduct } from "../features/ProductContext";
import { addProduct } from "../features/CartSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const ProductList = () => {
  const { products } = useProduct();
  const dispatch = useDispatch();
  const navigate=useNavigate();

  return (
    <ProductProvider value={{ products }}>

      <div className="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg"> 
      <button
        onClick={() => navigate("/cart")} // Navigate to "/cart"
        className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-lgs"
      >
        Go to Cart
      </button>
        {products.map((product) => (
          <div className="flex flex-col my-5 mt-11 w-80 transform rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
          <img className="h-48 w-full object-cover object-center" src="https://images.unsplash.com/photo-1674296115670-8f0e92b1fddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="Product Image" />
          <div className="p-4">
            <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">{product.image}</h2>
            <p className="mb-2 text-base dark:text-gray-300 text-gray-700">Product description goes here.</p>
            <div className="flex items-center">
              <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">{product.price}</p>
            </div>
            <button
            onClick={() => dispatch(addProduct({ id: product.id, name: product.name, price: product.price }))} 
            className="p-1 justify-center rounded-sm shadow-sm shadow-purple-200"
            >Add to cart</button>
          </div>
        </div>
        ))}
      </div>
    </ProductProvider>
  );
};
