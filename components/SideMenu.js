import Link from 'next/link';
import styles from '/styles/SideNav.module.sass';

export default function () {
  return (
    <div className={styles.main}>
      <Link href="/">Home</Link>
    </div>
  );
};