import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router";
import { Provider, useDispatch, useSelector } from "react-redux";
import { createStore } from "redux";

const initialState = { cart: [] };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return { ...state, cart: [...state.cart, action.payload] };
    case "REMOVE_FROM_CART":
      return { ...state, cart: state.cart.filter(item => item.id !== action.payload) };
    default:
      return state;
  }
};

const store = createStore(reducer);

const products = [
  { id: 1, name: "Laptop", price: 50000, image: "https://via.placeholder.com/150" },
  { id: 2, name: "Phone", price: 20000, image: "https://via.placeholder.com/150" },
  { id: 3, name: "Headphones", price: 3000, image: "https://via.placeholder.com/150" },
  { id: 4, name: "Keyboard", price: 1500, image: "https://via.placeholder.com/150" },
  { id: 5, name: "Mouse", price: 1000, image: "https://via.placeholder.com/150" },
  { id: 6, name: "Monitor", price: 12000, image: "https://via.placeholder.com/150" }
];

const ProductPage = () => {
  const dispatch = useDispatch();
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-3 sm:grid-cols-2 gap-4">
        {products.map(product => (
          <div key={product.id} className="border p-4 rounded-lg shadow-md text-center">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-2" />
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-gray-600">Price: ₹{product.price}</p>
            <button 
              onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })} 
              className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const CartPage = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Cart</h1>
      {cart.length === 0 ? <p>Cart is empty</p> : 
        cart.map(item => (
          <div key={item.id} className="border p-4 rounded-lg shadow-md mb-2">
            <h2 className="text-lg font-semibold">{item.name}</h2>
            <p className="text-gray-600">Price: ₹{item.price}</p>
            <button onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: item.id })} className="mt-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600">
              Remove from Cart
            </button>
          </div>
        ))
      }
    </div>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <nav className="p-4 bg-gray-800 text-white flex justify-between">
          <Link to="/" className="text-lg">Products</Link>
          <Link to="/cart" className="text-lg">Cart</Link>
        </nav>
        <Routes>
          <Route path="/" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
