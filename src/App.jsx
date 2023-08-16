
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer/Footer";
import ProductsPage from "./Pages/ProductsPage";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./Pages/CartPage";
import ErrorPage from "./components/ErrorPage";
import { CartProvider } from "./context/CartContext";
import Checkout from './components/Checkout/Checkout';

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <main>
            <Routes>
              <Route
                path="/"
                element={
                  <ProductsPage
                    title="Bienvenido a cálculo a la romana"
                    subTitle="Donde los amigos comparten los gastos de su cena "
                  />
                }
              />
              <Route
                path="/category/:categoryId"
                element={<ProductsPage title="Bienvenido a la categoría: " />}
              />
              <Route path="/Item/:id" element={<ItemDetailContainer />} />
              <Route path="/Cart" element={<Cart />} />
              <Route path="*" element={<ErrorPage />} />
              <Route path="/Checkout" element={<Checkout />} />
            </Routes>
          </main>

          <Footer />
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
