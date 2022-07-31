import styles from './TopCoin.module.css';

export default function TopCoin({ coin }) {
  return (
    <div className={styles.topCoin}>
      <div className={styles.rank}>{coin.market_cap_rank}</div>
      <img className={styles.logo} src={coin.image} alt={coin.name + 'logo'} />
      <div className={styles.name}>
        {coin.name}{' '}
        <span className={styles.symbol}>{coin.symbol.toUpperCase()}</span>
      </div>
      <div className={styles.price}>${coin.current_price.toFixed(2)}</div>

      {coin.price_change_percentage_24h < 0 ? (
        <div className={`${styles.priceChange} ${styles.red}`}>
          {coin.price_change_percentage_24h.toFixed(2)}%
        </div>
      ) : (
        <div className={`${styles.priceChange} ${styles.green}`}>
          {coin.price_change_percentage_24h.toFixed(2)}%
        </div>
      )}

      <div className={styles.marketCap}>
        ${coin.market_cap.toLocaleString('da-US')}
      </div>
    </div>
  );
}
