import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Rooms from './pages/Rooms';
import Contact from './pages/Contact';

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <Navbar />
        <main className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="*"
              element={
                <div className="card">
                  <h2>404 - Không tìm thấy trang</h2>
                  <p>Đường dẫn bạn truy cập không tồn tại.</p>
                  <Link to="/" className="btn btn-primary">
                    Quay về Trang chủ
                  </Link>
                </div>
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
