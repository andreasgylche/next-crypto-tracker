import styles from './Option.module.css';

export default function Option({ coin }) {
  return (
    <div className={styles.optionContainer}>
      <div className={styles.details}>
        <img src={coin.thumb} alt={coin.name} className={styles.logo} />
        <span className={styles.name}>
          {coin.name}
          <span className={styles.symbol}>{coin.symbol}</span>
        </span>
      </div>
      {coin.market_cap_rank ? (
        <span className={styles.rank}># {coin.market_cap_rank}</span>
      ) : (
        <span className={styles.rank}>Not ranked</span>
      )}
    </div>
  );
}
