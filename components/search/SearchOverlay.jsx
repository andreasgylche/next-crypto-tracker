import SearchField from './SearchField';
import SearchOptions from './SearchOptions';
import styles from './SearchOverlay.module.css';

export default function SearchOverlay({ toggleSearch }) {
  return (
    <div className={styles.overlayContainer} onClick={toggleSearch}>
      <div className={styles.contentContainer}>
        <SearchField />
        <SearchOptions />
      </div>
    </div>
  );
}
