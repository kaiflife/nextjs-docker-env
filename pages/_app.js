import '/styles/globals.css';
import styles from '/styles/Index.module.sass';
import SideMenu from '../components/SideMenu';

function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.main}>
      <SideMenu />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
