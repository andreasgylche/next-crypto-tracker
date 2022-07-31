import TrendingCoin from './TrendingCoin';
import styles from './TrendingCoins.module.css';

export default function TrendingCoins({ trendingCoins }) {
  return (
    <div>
      <h4>Trending coins the last 24 hours</h4>
      <div className={styles.trendingGrid}>
        {trendingCoins.coins
          .filter((coin, index) => index < 4)
          .map((coin) => (
            <TrendingCoin key={coin.item.id} coin={coin} />
          ))}
      </div>
    </div>
  );
}
