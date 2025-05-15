import About from './page/About'
import Certifications from './page/Certifications'
import Clients from './page/Clients'
import Contact from './page/Contact'
import Industries from './page/Industries'
import Home from './components/Home'
import MainLayout from './layout/Layout'
import { BrowserRouter as Router, Routes, Route } from "react-router";
import LightningProtection from './components/product/LightningProtection'
import EarthingSolutions from './components/product/EarthingSolutions'
import BackfillCompound from './components/product/Backfill-Compound'
import EarthPitCovers from './components/product/EarthPitCovers'

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
           <Route path="/products" element={""}>
            <Route path="lightning-protection" element={<LightningProtection />} />
            <Route path="earthing-solutions" element={<EarthingSolutions />} />
            <Route path="backfill-compound" element={<BackfillCompound />} />
            <Route path="earth-pit-covers" element={<EarthPitCovers />} />
          </Route>
          <Route path="/clients" element={<Clients />} />
          <Route path='/industries' element={<Industries />} />
          <Route path='/certifications' element={<Certifications />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;
