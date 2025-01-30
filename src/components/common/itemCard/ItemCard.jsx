import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import "./itemCard.css";

export const ItemCard = ({ item }) => {
  return (
    <Card className="item-card-container">
      <Link to={`/product/${item.id}`} className="item-link">
        <CardActionArea className="item-card-action-area">
          <CardMedia
            component="img"
            image={item.imageUrl}
            alt={item.title}
            className="item-card-media"
          />
          <CardContent className="item-card-content">
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              className="item-card-title"
            >
              {item.title}
            </Typography>
            <Typography variant="body2" className="item-card-description">
              {item.description}
            </Typography>
            <Typography variant="body2" className="item-card-price">
              ${item.price}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      <CardActions className="item-card-actions">
        <Button size="small" className="products-button">
          Agregar al carrito
        </Button>
      </CardActions>
    </Card>
  );
};
