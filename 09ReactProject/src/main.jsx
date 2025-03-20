import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { store } from './app/Store'
import { Provider } from 'react-redux'
import { BrowserRouter, Route ,Routes} from 'react-router-dom'
import { ProductList } from './component/ProductList.jsx'
import Cart from './component/Cart.jsx'


createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList/>} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </BrowserRouter>
  </Provider>
)
