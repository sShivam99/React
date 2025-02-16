import { ProductList } from "./component/ProductList"
import { ProductProvider, useProduct } from "./features/ProductContext"

function App() {
  
  return (
    <>
      {console.log("App.jsx")}
      <ProductList />
    </>
  )
}

export default App
