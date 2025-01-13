import { Footer } from "./components/layouts/footer/Footer";
import { Navbar } from "./components/layouts/navbar/Navbar";
import { ItemListContainer } from "./components/pages/itemListContainer/itemListContainer";

function App() {
  return (
    <div>
      <Navbar />
      <ItemListContainer text="Aca va Hero Section y algunos productos" />
      <Footer />
    </div>
  );
}

export default App;
