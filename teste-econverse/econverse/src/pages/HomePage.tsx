import React from "react";
import Header from "../components/header";
import Hero from "../components/hero";
import Categories from "../components/categories";
import SectionTitle from "../components/title";
import ProductSlider from "../components/products";
import styles from "../app.module.sass";
import Partners from "../components/partners";
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
      <Partners />
      <div className={styles.products}>
        <SectionTitle viewAllText="Ver todos">
          Produtos relacionados
        </SectionTitle>
        <Partners />
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
