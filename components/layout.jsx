import styles from './Layout.module.css';
import Navbar from './Navbar';
import Footer from './footer';
import SearchButton from './search/SearchButton';

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Navbar />
      <main>
        <SearchButton />
        {children}
      </main>
      <Footer />
    </div>
  );
}
