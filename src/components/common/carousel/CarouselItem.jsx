import { Paper } from "@mui/material";
import "./carousel.css";

export const CarouselItem = ({ item }) => {
  return (
    <Paper elevation={0}>
      <img src={item.imageURL} alt={item.title} className="carousel-image" />
    </Paper>
  );
};
