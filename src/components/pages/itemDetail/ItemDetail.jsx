import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import "./itemDetail.css";
import { Box, Button, Container, Grid2 } from "@mui/material";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";
import { Counter } from "../../common/counter/Counter";

export const ItemDetail = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const { addToCart } = useContext(CartContext);
  const [count, setCount] = useState(1);

  useEffect(() => {
    let productsCollection = collection(db, "products");
    let productRef = doc(productsCollection, id);
    const getProduct = getDoc(productRef);
    getProduct
      .then((res) => setItem({ id: res.id, ...res.data() }))
      .catch((error) => console.log(error));
  }, [id]);

  const onAdd = () => {
    let cartItem = { ...item, quantity: count };
    addToCart(cartItem);
  };

  return (
    <div className="item-container">
      <Grid2 container spacing={2}>
        <Grid2 xs={12} sm={4}>
          <Container>
            <img src={item.imageUrl} alt={item.title} className="item-image" />
          </Container>
        </Grid2>
        <Grid2 xs={12} sm={8} alignContent="center">
          <h1 className="title-text">{item?.title}</h1>
          <p className="price-text">${item?.price}</p>
          <Box
            className="buttons-box"
            sx={{ display: "flex", justifyContent: "space-between", gap: 2 }}
          >
            <Counter stock={item.stock} count={count} setCount={setCount} />
            <Button
              variant="contained"
              size="small"
              className="cart-button"
              onClick={onAdd}
            >
              Agregar al carrito
            </Button>
          </Box>
          <p className="description-text">{item?.description}</p>
        </Grid2>
      </Grid2>
    </div>
  );
};
