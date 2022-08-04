import styles from './SearchField.module.css';

export default function SearchField({ handleSearchInput }) {
  return (
    <div className={styles.searchFieldContainer}>
      <input
        type="text"
        name="searchCoin"
        id="searchCoin"
        autoFocus
        className={styles.searchInput}
        placeholder="Search for cryptocurrencies"
        onChange={handleSearchInput}
      />
    </div>
  );
}
