import { useRouter } from 'next/router';
import styles from '/styles/404.module.sass';

export default function Custom404() {
  const router = useRouter();
  const goBack = () => router.back();

  return (
    <div className={styles.notFound}>
      <h1>404 - Page Not Found</h1>
      <button onClick={goBack}>Back</button>
    </div>
  );
}