import { CartWidget } from "../../common/cartWidget/CartWidget";
import "./navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar-container">
      <Link to="/" className="navbar-logo">
        <h3 className="logo">TIENDA TURCA</h3>
      </Link>
      <ul className="navbar-list">
        <Link to="/" className="navbar-link">
          Inicio
        </Link>
        <Link to="/products" className="navbar-link">
          Productos
        </Link>
        <Link to="/" className="navbar-link">
          Contacto
        </Link>
      </ul>
      <CartWidget />
    </nav>
  );
};
