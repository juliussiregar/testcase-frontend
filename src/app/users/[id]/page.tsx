import { fetchUser } from '@/app/api/user';
import styles from '../../../styles/UserDetail.module.css';
import Link from 'next/link';

interface UserDetailPageProps {
  params: { id: string };
}

export default async function UserDetailPage({ params }: UserDetailPageProps) {
  const user = await fetchUser(params.id);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Detail Pengguna</h1>
      <h2 className={styles.nameTitle}>{user.name}</h2>
      <p className={styles.text}><strong>Email:</strong> {user.email}</p>
      <p className={styles.text}><strong>Phone:</strong> {user.phone}</p>
      <p className={styles.text}><strong>Website:</strong> <Link href={`http://${user.website}`} target="_blank" rel="noopener noreferrer" className={styles.link}>{user.website}</Link></p>
      <p className={styles.text}><strong>Company:</strong> {user.company.name}</p>
      <p className={styles.text}><strong>Address:</strong> {`${user.address.street}, ${user.address.city}, ${user.address.zipcode}`}</p>
    </div>
  );
}
