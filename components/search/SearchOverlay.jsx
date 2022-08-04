import SearchField from './SearchField';
import SearchOptions from './SearchOptions';
import styles from './SearchOverlay.module.css';

export default function SearchOverlay({ activeSearch }) {
  return (
    <div>
      <SearchField />
      <SearchOptions />
    </div>
  );
}
