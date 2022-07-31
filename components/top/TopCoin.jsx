import styles from './TopCoin.module.css';

export default function TopCoin({ coin }) {
  return (
    <div className={styles.topCoin}>
      <span className={styles.rank}>{coin.market_cap_rank}</span>
      <img className={styles.logo} src={coin.image} alt={coin.name + 'logo'} />
      <span className={styles.name}>
        {coin.name}{' '}
        <span className={styles.symbol}>{coin.symbol.toUpperCase()}</span>
      </span>
      <span className={styles.price}>${coin.current_price.toFixed(2)}</span>

      {coin.price_change_percentage_24h < 0 ? (
        <span className={`${styles.priceChange} ${styles.red}`}>
          {coin.price_change_percentage_24h.toFixed(2)}%
        </span>
      ) : (
        <span className={`${styles.priceChange} ${styles.green}`}>
          {coin.price_change_percentage_24h.toFixed(2)}%
        </span>
      )}

      <span className={styles.marketCap}>
        ${coin.market_cap.toLocaleString()}
      </span>
    </div>
  );
}
