import { Badge } from "@mui/material";
import { CartWidget } from "../../common/cartWidget/CartWidget";
import "./navbar.css"; // Import the CSS file
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
      <Badge badgeContent={4} color="primary" className="cart-icon">
        <CartWidget />
      </Badge>
    </nav>
  );
};
