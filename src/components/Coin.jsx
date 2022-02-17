import React from "react";
//React Router Dom
import { Link } from "react-router-dom";

//Styles
import styles from "./Coin.module.css";

const Coin = ({ name, image, symbol, price, marketCap, priceChange }) => {
  return (
    <div className={styles.container}>
      <img
        src={image}
        placeholder="Search"
        alt={name}
        className={styles.image}
      />
      <span className={styles.name}>{name}</span>
      <span className={styles.symbol}>{symbol.toUpperCase()}</span>
      <span className={styles.current_price}>$ {price.toLocaleString()}</span>
      <span
        className={
          priceChange > 0 ? styles.greenPriceChange : styles.redPriceChange
        }>
        {priceChange.toFixed(2)}
      </span>
      <span>$ {marketCap.toLocaleString()}</span>
      <span className={styles.info}>
        <Link
          to={"/coinDetail"}
          state={{
            data: { name, image, symbol, price, marketCap, priceChange },
          }}>
          <i class="fa-solid fa-circle-info"></i> See Detail
        </Link>
      </span>
    </div>
  );
};

export default Coin;
