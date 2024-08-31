import React from "react";
import Header from "../components/header";
import Hero from "../components/hero";
import Categories from "../components/categories";
import SectionTitle from "../components/title";
import ProductSlider from "../components/produtos";
import styles from "../app.module.sass";
import Parceiros from "../components/parceiros";
import Footer from "../components/footer";
import Brands from "../components/brands";


const HomePage: React.FC = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Categories />
      <SectionTitle>Produtos relacionados</SectionTitle>
      <ProductSlider />
      <Parceiros />
      <div className={styles.products}>
        <SectionTitle viewAllText="Ver todos">
          Produtos relacionados
        </SectionTitle>
        <Parceiros />
        <div className={styles.products}>
        <SectionTitle>Navegue por marcas</SectionTitle>
      </div>
      <Brands />
      <Footer />

      </div>
    </div>
  );
};

export default HomePage;
