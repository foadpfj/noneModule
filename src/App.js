import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Search from "./pages/Search";

const App = () => {
  return (
    <>
      <Header />
      <main className='container mx-auto mt-10'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/search' element={<Search />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
