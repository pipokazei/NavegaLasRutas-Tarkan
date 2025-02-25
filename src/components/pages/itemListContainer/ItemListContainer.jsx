import "./itemListContainer.css";
import { useEffect, useState } from "react";
import { ItemCard } from "../../common/itemCard/ItemCard";
import { CircularProgress, Grid2 } from "@mui/material";
import { useParams } from "react-router-dom";
import { ItemListSelect } from "../../common/itemListSelect/ItemListSelect";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    let productsCollection = collection(db, "products");
    let consult = productsCollection;

    if (name) {
      let filteredCollection = query(
        productsCollection,
        where("category", "==", name)
      );
      consult = filteredCollection;
    }

    const getProducts = getDocs(consult);
    getProducts
      .then((res) => {
        const products = res.docs.map((product) => {
          return { id: product.id, ...product.data() };
        });
        setItems(products);
      })
      .catch((error) => console.log(error));
  }, [name]);

  // const agregarProductos = () => {
  //   let productsCollection = collection(db, "products");
  //   products.forEach((element) => addDoc(productsCollection, element));
  // };

  return (
    <>
      <div className="item-list">
        {/* <button onClick={agregarProductos}>agregar productos</button> */}
        <div className="select-container">
          <ItemListSelect />
        </div>
        {items.length === 0 ? (
          <CircularProgress color="inherit" />
        ) : (
          <Grid2
            container
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            {items.map((item, index) => (
              <Grid2 xs={12} sm={6} md={4} key={index}>
                <ItemCard item={item} />
              </Grid2>
            ))}
          </Grid2>
        )}
      </div>
    </>
  );
};
