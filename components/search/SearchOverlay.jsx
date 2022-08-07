import axios from 'axios';
import { useEffect, useState } from 'react';
import SearchField from './SearchField';
import SearchOptions from './SearchOptions';
import styles from './SearchOverlay.module.css';

export default function SearchOverlay() {
  const [searchInput, setSearchInput] = useState(null);
  const [searchedCoins, setSearchedCoins] = useState(null);

  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    let searchUrl = `https://api.coingecko.com/api/v3/search?query=${searchInput}`;

    const fetchCoins = async () => {
      const res = axios
        .get(searchUrl)
        .then((res) => {
          setSearchedCoins(res.data.coins);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    fetchCoins();
  }, [searchInput]);

  return (
    <div className={styles.overlayContainer}>
      <div className={styles.contentContainer}>
        <SearchField handleSearchInput={handleSearchInput} />
        <SearchOptions searchedCoins={searchedCoins} />
      </div>
    </div>
  );
}
