import { Box, Container, Grid2, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import "./cartItemCard.css";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

export const CartItemCard = ({ item }) => {
  const { removeById } = useContext(CartContext);

  return (
    <Container className="item-detail-container">
      <Grid2 container sm={6}>
        <Grid2 xs={12} sm={4}>
          <Container className="image-container">
            <img
              src={item.imageUrl}
              alt={item.title}
              className="item-detail-image"
            />
          </Container>
        </Grid2>
        <Grid2 xs={12} sm={8} alignContent="center">
          <Box
            className="buttons-box"
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 2,
            }}
          >
            <h2 className="title-text">{item.title}</h2>
            <IconButton onClick={() => removeById(item.id)}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </Box>

          <p className="text">Cantidad: {item.quantity}</p>
          <p className="text">${item.price}</p>
        </Grid2>
      </Grid2>
    </Container>
  );
};
