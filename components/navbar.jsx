import styles from './Navbar.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter();

  return (
    <header className={styles.header}>
      <Link href="/">
        <a className={styles.logo}>CryptoTracker</a>
      </Link>
      <nav className={styles.nav}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link href="/">
              <a className={router.asPath == '/' ? styles.active : ''}>Home</a>
            </Link>
          </li>
          <li className={styles.item}>
            <Link href="/coins">
              <a className={router.asPath == '/coins' ? styles.active : ''}>
                Coins
              </a>
            </Link>
          </li>
          <li className={styles.item}>
            <Link href="/markets">
              <a className={router.asPath == '/markets' ? styles.active : ''}>
                Markets
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
