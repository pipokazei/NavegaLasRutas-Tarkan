import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { products } from "../../../products";
import "./itemDetail.css";
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Grid2,
  TextField,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { CartContext } from "../../../context/CartContext";

export const ItemDetail = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [count, setCount] = useState(1);
  const { addToCart } = useContext(CartContext);

  const handleChange = (event) => {
    setCount(Math.max(Number(event.target.value), 1));
  };

  useEffect(() => {
    let itemSelected = products.find((product) => product.id === id);

    setItem(itemSelected);
  }, [id]);

  const onAdd = () => {
    let cartItem = { ...item, quantity: count };
    addToCart(cartItem);
  };

  return (
    <div className="item-detail-container">
      <Grid2 container spacing={2}>
        <Grid2 xs={12} sm={4}>
          <Container>
            <img
              src={item.imageUrl}
              alt={item.title}
              className="item-detail-image"
            />
          </Container>
        </Grid2>
        <Grid2 xs={12} sm={8}>
          <h1 className="title-text">{item?.title}</h1>
          <p className="price-text">${item?.price}</p>
          <Box
            className="buttons-box"
            sx={{ display: "flex", justifyContent: "space-between", gap: 2 }}
          >
            <ButtonGroup className="button-group">
              <Button
                onClick={() => setCount((prev) => prev - 1)}
                disabled={count === 1}
              >
                <RemoveIcon fontSize="small" className="counter-button" />
              </Button>
              <TextField
                size="small"
                onChange={handleChange}
                value={count}
                className="counter-input"
              />
              <Button
                onClick={() => setCount((prev) => prev + 1)}
                disabled={count === item?.stock}
              >
                <AddIcon fontSize="small" className="counter-button" />
              </Button>
            </ButtonGroup>
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
