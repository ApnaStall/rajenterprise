import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Services from "./pages/Services";
import Quality from "./pages/Quality";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="Login" element={<Login />} />
        <Route path="Register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="Shop" element={<Shop />} />
        <Route path="Services" element={<Services />} />
        <Route path="Quality" element={<Quality />} />
        <Route path="About" element={<About />} />
        <Route path="Contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
