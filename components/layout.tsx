import styles from "~/styles/Layout.module.scss";
import NaviDrawer from "./navi-drawer";
import Head from "next/head";
export default function Layout({ children }) {
  return (
    <div className={styles["layout"]}>
      <NaviDrawer />

      <Head>
        <link rel="icon" href="favicon.ico" />
      </Head>
      <div className={styles["page-content"]}> {children} </div>

      <footer className={styles.footer}>
        <p className={styles["created-by"]}>
          Created with <span className={styles["love-emoji"]}>♥️</span> by Nefo
          Fortressia
        </p>
        <p>Color pallete by the Dracula theme project. Hosted with Vercel.</p>
      </footer>
    </div>
  );
}
