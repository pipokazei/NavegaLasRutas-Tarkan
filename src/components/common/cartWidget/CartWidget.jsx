import { Badge } from "@mui/material";
import { useContext } from "react";
import { IoCart } from "react-icons/io5";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";

export const CartWidget = () => {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <Link to="/cart">
        <Badge
          badgeContent={cart?.length}
          color="primary"
          className="cart-icon"
        >
          <IoCart size="30px" />
        </Badge>
      </Link>
    </div>
  );
};
