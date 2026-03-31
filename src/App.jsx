import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Nav from './components/Nav';
import Home from './pages/Home';
import Nature from './pages/Nature';
import Self from './pages/Self';
import Community from './pages/Community';
import Tech from './pages/Tech';
import Economy from './pages/Economy';

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-surface font-body text-on-surface">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nature" element={<Nature />} />
          <Route path="/self" element={<Self />} />
          <Route path="/community" element={<Community />} />
          <Route path="/tech" element={<Tech />} />
          <Route path="/economy" element={<Economy />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
