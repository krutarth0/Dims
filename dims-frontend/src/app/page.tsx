import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <ol>
          <li>Getting started with DIMS...</li>
          <li>Find a deployment place, select a database and doom 💣</li>
        </ol>
      </main>
    </div>
  );
}
