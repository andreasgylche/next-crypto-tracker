import { Children } from 'react';
import styles from '../../styles/Home.module.css';

export default function TrendingCoins({ trendingCoins }) {
  return (
    <div>
      <h2>Trending coins the last 24 hours</h2>
      {trendingCoins.coins.map((coin) => {
        return <p key={coin.item.id}>{coin.item.name}</p>;
      })}
    </div>
  );
}
