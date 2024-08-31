import styles from "./hero.module.sass";
import Banner from '/src/assets/images/banner.svg';
import BannerShadow from '/src/assets/images/bannerShadow.svg';




export default function Hero() {
  return (
    <div className={styles.heroContainer}>
      <div className={styles.bannerWrapper}>
        <img src={Banner} width={1443} height={395} alt="Banner" />
        <img
          src={BannerShadow}
          width={1443}
          height={395}
          alt="Banner Shadow"
          className={styles.bannerShadow}
        />
        <div className={styles.textOverlay}>
          <h1>Venha conhecer nossas promoções</h1>
          <h2>50% Off nos produtos</h2>
          <button className={styles.ctaButton}>Ver produto</button>
        </div>
      </div>
    </div>
  );
}
