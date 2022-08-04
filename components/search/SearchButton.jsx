import { useCallback, useEffect, useState } from 'react';
import styles from './SearchButton.module.css';
import { SearchIcon } from '@heroicons/react/outline';
import SearchOverlay from './SearchOverlay';

export default function SearchButton() {
  // TODO: Connect to search API
  // TODO: Create search input field - conditional rendering
  // TODO: Create search options

  const [activeSearch, setActiveSearch] = useState(false);

  const toggleSearch = () => {
    setActiveSearch(!activeSearch);
  };

  const handleKeyDown = useCallback((e) => {
    if (e.key.toLowerCase() === 'k' && e.ctrlKey === true) {
      e.preventDefault();
      toggleSearch();
    }
  });

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <>
      <div className={styles.searchButton} onClick={toggleSearch}>
        <span className={styles.label}>
          <SearchIcon />
          Search for cryptocurrencies
        </span>
        <div className={styles.shortcut}>
          <code>ctrl</code>
          <span>+</span>
          <code>k</code>
        </div>
      </div>
      {activeSearch ? <SearchOverlay activeSearch={activeSearch} /> : ''}
    </>
  );
}
