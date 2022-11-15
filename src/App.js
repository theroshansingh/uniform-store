import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import Btech from "./Pages/courses/Btech";
import Graduation from "./Pages/courses/Graduation";
import Management from "./Pages/courses/Management";
import Mnavy from "./Pages/courses/Mnavy";
import Pharmacy from "./Pages/courses/Pharmacy";

import { createContext, useState } from "react";

export const appContext = createContext();

function App() {
  const [cart, setCart] = useState([]);
  const [active, setActive] = useState({});
  const [total, setTotal] = useState(0);
  const val = { total, setTotal, cart, setCart, active, setActive };

  return (
    <appContext.Provider value={val}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/btech" element={<Btech />} />
          <Route path="/management" element={<Management />} />
          <Route path="/graduation" element={<Graduation />} />
          <Route path="/pharmacy" element={<Pharmacy />} />
          <Route path="/merchantnavy" element={<Mnavy />} />
        </Routes>
      </Router>
    </appContext.Provider>
  );
}

export default App;
