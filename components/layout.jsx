import styles from '../styles/Layout.module.css';
import Navbar from './Navbar';
import Footer from './footer';

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
