import Home from "./pages/Home";
import About from "./pages/About";
import Portofolio from "./pages/Portofolio";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div style={{ height: "100vh" }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portofolio" element={<Portofolio />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
