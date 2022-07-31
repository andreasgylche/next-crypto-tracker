import TopCoin from './TopCoin';
import styles from './TopCoins.module.css';

export default function TopCoins({ allCoins }) {
  console.log(allCoins);
  return (
    <div>
      <h2>Top 100 coins by market cap</h2>
      <div className={styles.topContainer}>
        {allCoins.map((coin) => {
          return <TopCoin key={coin.id} coin={coin} />;
        })}
      </div>
    </div>
  );
}
