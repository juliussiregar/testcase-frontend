import { fetchUsers } from "@/app/api/user"
import styles from "@/styles/Home.module.css"
import { User } from "@/types/user.types"
import Link from "next/link"

export default async function HomePage() {
  const users = await fetchUsers()

  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <div className={styles.navItem}>
          <Link href="/artikel" className={styles.navLink}>Soal No. 1 Daftar Artikel</Link>
        </div>
        <div className={styles.navItem}>
          <Link href="/" className={styles.navLink}>Soal No. 2 Daftar Pengguna</Link>
        </div>
        <div className={styles.navItem}>
          <Link href="/api/products" className={styles.navLink}>Soal No. 3 Daftar Produk</Link>
        </div>
        <div className={styles.navItem}>
          <Link href="/form" className={styles.navLink}>Soal No.4 Form</Link>
        </div>
        <div className={styles.navItem}>
          <Link href="/gallery" className={styles.navLink}>Soal No.5 Images</Link>
        </div>
      </nav>
      
      <h2 className={styles.subtitle}>Daftar Pengguna</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.tableHeader}>Name</th>
            <th className={styles.tableHeader}>Username</th>
            <th className={styles.tableHeader}>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user: User) => (
            <tr key={user.id} className={styles.tableRow}>
              <td className={styles.tableCell}>
                <Link href={`/users/${user.id}`} className={styles.link}>
                  {user.name}
                </Link>
              </td>
              <td className={styles.tableCell}>{user.username}</td>
              <td className={styles.tableCell}>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
