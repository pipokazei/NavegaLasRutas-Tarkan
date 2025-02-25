import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import "./cart.css";
import { Box, Button } from "@mui/material";
import { CartItemCard } from "../../common/cartItemCard/CartItemCard";

export const Cart = () => {
  const { cart, getTotalAmount } = useContext(CartContext);
  const navigate = useNavigate();
  let total = getTotalAmount();

  return (
    <div className="cart-container">
      {cart?.map((item, index) => (
        <CartItemCard item={item} key={index} />
      ))}
      <Box className="summary-container">
        {cart.length > 0 ? (
          <>
            <h2>Resumen de compra</h2>
            <h3>Total : {total}</h3>
            <Button
              onClick={() => navigate("/checkout")}
              className="final-button"
              variant="contained"
            >
              Finalizar compra
            </Button>
          </>
        ) : (
          <>
            <h3>Tu carrito está vacio</h3>
            <Link to="/products"> Empeza a comprar </Link>
          </>
        )}
      </Box>
    </div>
  );
};
