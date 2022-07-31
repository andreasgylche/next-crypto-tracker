import Link from 'next/link';
import TopCoin from './TopCoin';
import styles from './TopCoins.module.css';

export default function TopCoins({ topCoins }) {
  return (
    <div>
      <h4>Top 10 coins by market cap</h4>
      <div className={styles.topContainer}>
        {topCoins.map((coin) => {
          return <TopCoin key={coin.id} coin={coin} />;
        })}
      </div>
      <Link href="/coins">
        <a className={styles.button}>See more coins</a>
      </Link>
    </div>
  );
}
