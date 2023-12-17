// FeaturedProducts.jsx
import React from 'react';
import styles from './FeaturedProducts.module.scss';
import Carousel from '../Carousel/Carousel';

const FeaturedProducts = () => {
  

  return (
    <div className={styles.featuredProducts}>
      <h2 className={styles.title}>Featured Products</h2>
      <p className={styles.subtitle}>Explore and discover a variety of products</p>
      <div className={styles.additionalDiv}></div>
      <Carousel />
    </div>
  );
};

export default FeaturedProducts;
