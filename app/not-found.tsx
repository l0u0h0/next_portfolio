import styles from '../styles/notfound.module.css';
import { useRouter } from 'next/router';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found',
  description: 'Page Not Found, Error Code 404',
};

export default function PageNotFound() {
  const router = useRouter();

  return (
    <div className={styles.pagenotfound}>
      <div className={styles.body}>
        <div className={styles.noise}></div>
        <div className={styles.overlay}></div>
        <div className={styles.terminal}>
          <h1>
            Error <span className={styles.errorcode}>404</span>
          </h1>
          <p className={styles.output}>
            The page you are looking for might have been removed, had its name
            changed or is temporarily unavailable.
          </p>
          <p className={styles.output}>
            Please try to <a onClick={() => router.back()}>go back</a> or{' '}
            <a href="/">return to the homepage</a>.
          </p>
          <p className={styles.output}>Good luck.</p>
        </div>
      </div>
    </div>
  );
}
