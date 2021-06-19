import styles from "./Coins.module.css";
import Link from "next/link";

interface Props {
  name: any;
  id: any;
  price: any;
  symbol: any;
  marketcap: any;
  volume: any;
  image: any;
  priceChange: any;
}

const Coins = ({
  name,
  id,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
}: Props) => {
  return (
    <Link href="/coin/[id]" as={`/coin/${id}`}>
      <a>
        <div className={styles.coin_container}>
          <div className={styles.coin_row}>
            <div className={styles.coin}>
              <img src={image} alt={name} className={styles.coin_img} />
              <h1 className={styles.coin_h1}>{name}</h1>
              <p className={styles.coin_symbol}>{symbol}</p>
            </div>
            <div className={styles.coin_data}>
              <p className={styles.coin_price}>PHP {price}</p>
              <p className={styles.coin_volume}>
                PHP {volume.toLocaleString()}
              </p>
              <p
                className={
                  priceChange < 0
                    ? (styles.coin_percent, styles.red)
                    : (styles.coin_percent, styles.red)
                }
              >
                {priceChange.toFixed(2)}%
              </p>

              <p className={styles.coin_marketcap}>
                Mkt Cap: PHP{marketcap.toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Coins;
