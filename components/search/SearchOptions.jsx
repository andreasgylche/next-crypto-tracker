import styles from './SearchOptions.module.css';
import Option from './Option';

export default function SearchOptions({ searchedCoins }) {
  return (
    <div className={styles.optionsContainer}>
      {searchedCoins?.map((coin) => (
        <Option key={coin.id} coin={coin} />
      ))}
    </div>
  );
}
