'use client';

import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from './products.module.sass';
import { Navigation } from 'swiper/modules';
import LeftArrow from '../../assets/images/arrow-left.svg';
import RightArrow from '../../assets/images/arrow-right.svg';
import Modal from '../modal/index';

interface Product {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [activeCategory, setActiveCategory] = useState('CELULAR');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetch('/api/teste-front-end/junior/tecnologia/lista-produtos/produtos.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Confirme que data.products está no formato esperado
        if (Array.isArray(data.products)) {
          setProducts(data.products);
        } else {
          console.error('Dados de produtos não estão no formato esperado:', data);
        }
      })
      .catch(error => console.error("Erro ao buscar dados:", error));
  }, []);

  const categories = ['CELULAR', 'ACESSÓRIOS', 'TABLETS', 'NOTEBOOKS', 'TVS', 'VER TODOS'];

  const handleBuyClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <div className={styles.sliderWrapper}>
      <div className={styles.menu}>
        {categories.map((category) => (
          <div
            key={category}
            className={`${styles.menuItem} ${activeCategory === category ? styles.active : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </div>
        ))}
      </div>
      <div className={styles.sliderContainer}>
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={4}
          navigation={{
            nextEl: `.${styles.swiperButtonNext}`,
            prevEl: `.${styles.swiperButtonPrev}`,
          }}
          breakpoints={{
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            600: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            480: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
          }}
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <div className={styles.productCard}>
                <img
                  src={product.photo}
                  alt={product.productName}
                  width={270}
                  height={200}
                  className={styles.productImage}
                />
                <p className={styles.productName}>{product.productName}</p>
                <p className={styles.oldPrice}>R$ {(product.price * 1.2).toFixed(2)}</p>
                <p className={styles.newPrice}>R$ {product.price.toFixed(2)}</p>
                <p className={styles.installments}>ou 2x de R$ {(product.price / 2).toFixed(2)} sem juros</p>
                <p className={styles.freeShipping}>Frete grátis</p>
                <button
                  className={styles.buyButton}
                  onClick={() => handleBuyClick(product)} // Abre o modal com o produto selecionado
                >
                  Comprar
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={styles.swiperButtonPrev}><img src={LeftArrow} width={40} height={40} alt='Arrow Left' /></div>
      <div className={styles.swiperButtonNext}><img src={RightArrow} width={40} height={40} alt='Arrow Right' /></div>

      {/* Modal */}
      {selectedProduct && (
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          product={selectedProduct}
        />
      )}
    </div>
  );
}
