import styles from '../../styles/Artikel.module.css';
import { fetchArtikel } from '../api/artikel';

export default async function ArtikelPage() {
  const data = await fetchArtikel();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Daftar Artikel</h1>
      <ul className={styles.list}>
        {data.map((artikel) => (
          <li key={artikel.id} className={styles.listItem}>
            <h2 className={styles.articleTitle}>{artikel.title}</h2>
            <p className={styles.articleBody}>{artikel.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
