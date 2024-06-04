import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart/container/cartContainer";
import Login from "./pages/Login/pages/Login";
import MyCart from "./pages/MyCart/container/cartContainer";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/register" element={<Cart />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/cart" element={<MyCart />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
