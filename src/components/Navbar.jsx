import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <NavLink to="/" className="brand">
          SmartStay
        </NavLink>
        <nav aria-label="Main Navigation">
          <ul className="nav-links">
            <li>
              <NavLink to="/" end className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                Trang chủ
              </NavLink>
            </li>
            <li>
              <NavLink to="/rooms" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                Danh sách phòng
              </NavLink>
            </li>
            <li>
              <NavLink to="/about-us" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                Giới thiệu
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                Liên hệ
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
