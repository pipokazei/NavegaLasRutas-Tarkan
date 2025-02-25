import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseConfig";
import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import "./checkout.css";
import { Box, Button, TextField } from "@mui/material";

export const Checkout = () => {
  const { cart, getTotalAmount, removeCart } = useContext(CartContext);
  const [ticketNumber, setTicketNumber] = useState(null);
  const [userInfo, setUserInfo] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const total = getTotalAmount();

  const handleBuy = (event) => {
    event.preventDefault();
    console.log("entro");
    let order = {
      buyer: userInfo,
      items: cart,
      total: total,
    };

    let ordersCollection = collection(db, "orders");

    const newOrder = addDoc(ordersCollection, order);
    newOrder.then((res) => {
      setTicketNumber(res.id);
      removeCart();
    });

    let productsCollection = collection(db, "products");

    order.items.forEach((element) => {
      let refDoc = doc(productsCollection, element.id);
      updateDoc(refDoc, { stock: element.stock - element.quantity });
    });
  };

  const changeField = (evento) => {
    const { value, name } = evento.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  return (
    <div className="checkout-container">
      {ticketNumber ? (
        <h1>tu comprobante es : {ticketNumber}</h1>
      ) : (
        <Box className="form-container">
          <form onSubmit={handleBuy}>
            <TextField
              placeholder="Nombre"
              label="Nombre"
              onChange={changeField}
              size="small"
              name="name"
              className="text-field"
              sx={{ margin: "20px" }}
            />
            <TextField
              placeholder="Telephono"
              label="Telephono"
              onChange={changeField}
              size="small"
              name="phone"
              className="text-field"
              sx={{ margin: "20px" }}
            />
            <TextField
              placeholder="Email"
              label="Email"
              onChange={changeField}
              size="small"
              name="email"
              className="text-field"
              sx={{ margin: "20px" }}
            />
            <h4 className="total-text">Total: {total}</h4>
            <Button
              variant="contained"
              size="small"
              className="button"
              sx={{ margin: "20px" }}
              type="submit"
            >
              Comprar
            </Button>
          </form>
        </Box>
      )}
    </div>
  );
};
