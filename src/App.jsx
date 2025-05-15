import { BrowserRouter as Router, Routes, Route } from "react-router";

import About from "./page/About";
import Certifications from "./page/Certifications";
import Clients from "./page/Clients";
import Contact from "./page/Contact";
import Industries from "./page/Industries";
import Home from "./page/Home";

import LightningProtection from "./components/product/LightningProtection";
import EarthingSolutions from "./components/product/EarthingSolutions";
import BackfillCompound from "./components/product/Backfill-Compound";
import EarthPitCovers from "./components/product/EarthPitCovers";

import MainLayout from "./layout/Layout";

function App() {
  return (
    <Router>
      <Routes>
        {/* Main Layout as wrapper */}
        <Route path="/" element={<MainLayout />}>
          {/* Nested Routes under layout */}
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="certifications" element={<Certifications />} />
          <Route path="clients" element={<Clients />} />
          <Route path="industries" element={<Industries />} />
          <Route path="contact" element={<Contact />} />

          {/* Products */}
          <Route path="products/lightning-protection" element={<LightningProtection />} />
          <Route path="products/earthing-solutions" element={<EarthingSolutions />} />
          <Route path="products/backfill-compound" element={<BackfillCompound />} />
          <Route path="products/earth-pit-covers" element={<EarthPitCovers />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
