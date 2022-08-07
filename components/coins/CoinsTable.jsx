import Link from 'next/link';
import Coin from './Coin';
import styles from './CoinsTable.module.css';

export default function CoinsTable({ coins }) {
  return (
    <div>
      <h4>Top 10 coins by market cap</h4>
      <div className={styles.topContainer}>
        {coins?.map((coin) => {
          return <Coin key={coin.id} coin={coin} />;
        })}
      </div>
    </div>
  );
}
