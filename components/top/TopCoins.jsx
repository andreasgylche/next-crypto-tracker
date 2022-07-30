import styles from '../../styles/Home.module.css';

export default function TrendingCoins({ allCoins }) {
  return (
    <div>
      <h2>Top 100 coins by market cap</h2>
      {allCoins.map((coin) => {
        return <p key={coin.id}>{coin.name}</p>;
      })}
    </div>
  );
}
