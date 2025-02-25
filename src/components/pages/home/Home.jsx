import { Button, Stack } from "@mui/material";
import { HomeCarousel } from "../../common/carousel/HomeCarousel";
import "./home.css";
import { ItemCard } from "../../common/itemCard/ItemCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

export const Home = () => {
  const [favouriteItems, setFavouriteItems] = useState([]);

  useEffect(() => {
    let productsCollection = collection(db, "products");
    let favouriteItems = query(
      productsCollection,
      where("title", "in", ["Toalla Turca", "Tetera Turca", "Amuleto Turco"])
    );

    const getProducts = getDocs(favouriteItems);
    getProducts
      .then((res) => {
        const products = res.docs.map((product) => {
          return { id: product.id, ...product.data() };
        });
        setFavouriteItems(products);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="main-container">
      <HomeCarousel />
      <section className="brand-explanation">
        <p className="description-text">
          Vivi la cultura turca sin viajar a Turquía
        </p>
        <p>
          <span className="highlight">
            Traemos el encanto de Turquía a tu hogar con productos únicos y
            seleccionados
          </span>
        </p>
        <p>
          Explora nuestra exclusiva colección de toallas, teteras, vasos de té,
          shisha, y adornos artesanales que reflejan la riqueza de la cultura y
          la tradición turca. Cada pieza está cuidadosamente elaborada para
          brindarte calidad, estilo y autenticidad
        </p>
      </section>
      <section className="highlighted-products">
        <h1>Productos destacados</h1>
        <Stack direction="row" spacing={3} className="card-container">
          {favouriteItems?.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </Stack>
        <div className="products-button-wrapper">
          <Link to="/products">
            <Button variant="text" className="products-button">
              Ver todos los productos
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};
