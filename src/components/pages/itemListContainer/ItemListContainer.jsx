import "./itemListContainer.css";
import { products } from "../../../products";
import { useEffect, useState } from "react";
import { ItemCard } from "../../common/itemCard/ItemCard";
import { Grid2 } from "@mui/material";
import { useParams } from "react-router-dom";
import { ItemListSelect } from "../../common/itemListSelect/ItemListSelect";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    let filteredProducts;

    if (name) {
      filteredProducts = products.filter(
        (product) => product.category === name
      );
    }

    const getProducts = new Promise((resolve, reject) => {
      const isLogged = true;
      if (isLogged) {
        resolve(!name ? products : filteredProducts);
      } else {
        reject({ statusCode: 400, message: "Algo salió mal" });
      }
    });

    getProducts
      .then((response) => {
        setItems(response);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {});
  }, [name]);

  return (
    <>
      <div className="item-list">
        <div className="select-container">
          <ItemListSelect />
        </div>
        <Grid2
          container
          spacing={2}
          justifyContent="center"
          alignItems="center"
        >
          {items.map((item) => (
            <Grid2 xs={12} sm={6} md={4} key={item.id}>
              <ItemCard item={item} />
            </Grid2>
          ))}
        </Grid2>
      </div>
    </>
  );
};
