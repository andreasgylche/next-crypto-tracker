import styles from './TrendingCoin.module.css';

export default function TrendingCoin({ coin }) {
  return (
    <div className={styles.trendingCoin}>
      <img className={styles.logo} src={coin.item.thumb} alt="logo" />
      <span className={styles.name}>{coin.item.name}</span>
    </div>
  );
}
