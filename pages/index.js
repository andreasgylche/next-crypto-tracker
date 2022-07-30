import axios from 'axios';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home({ trendingCoins, allCoins }) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <h1>Next.js Crypto Tracker</h1>
        {trendingCoins.coins.map((coin) => {
          return <p key={coin.item.id}>{coin.item.name}</p>;
        })}
        {allCoins.map((coin) => {
          return <p key={coin.id}>{coin.name}</p>;
        })}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const trendingUrl = 'https://api.coingecko.com/api/v3/search/trending';
  const allCoinsUrl =
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24%2C7d';

  const [trendingCoinsRes, allCoinsRes] = await Promise.all([
    axios.get(trendingUrl),
    axios.get(allCoinsUrl),
  ]);

  return {
    props: { trendingCoins: trendingCoinsRes.data, allCoins: allCoinsRes.data },
  };
}
