import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import "./cart.css";

export const Cart = () => {
  const { cart, removeCart, removeById, getTotalAmount } =
    useContext(CartContext);

  let total = getTotalAmount();

  return (
    <div className="cart-container">
      {cart.map((product) => {
        return (
          <div
            key={product.id}
            style={{ border: "2px solid black", padding: "20px" }}
          >
            <h2>{product.title}</h2>
            <h2>{product.price}</h2>
            <h2>{product.quantity}</h2>
            <button onClick={() => removeById(product.id)}>Eliminar</button>
          </div>
        );
      })}
      <button onClick={removeCart}>Vaciar carrito</button>

      <h2>El total a pagar es : {total}</h2>
      <Link to="/checkout"> Finalizar compra </Link>
    </div>
  );
};
