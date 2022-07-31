import axios from 'axios';

export default function Coin({ coinDetails }) {
  return (
    <div>
      {coinDetails.name} - ${coinDetails.market_data.current_price.usd}
    </div>
  );
}

export async function getServerSideProps(context) {
  const id = context.params.id;
  const url = `https://api.coingecko.com/api/v3/coins/${id}?tickers=true&market_data=true`;
  const res = await axios.get(url);

  return {
    props: { coinDetails: res.data },
  };
}
