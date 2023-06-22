import { cookies } from 'next/headers';
import { getValidSessionByToken } from '../../../database/sessions';
import { redirect } from 'next/navigation';
import styles from './page.module.scss';
import Modal from '../../_components/Modal/Modal';
import AddDiaryEntryForm from '../../_components/AddDiaryEntryForm/AddDiaryEntryForm';
import { getExercises } from '../../../database/exercises';

export default async function HomePage() {
  // 1. Check if the sessionToken cookie exit
  const sessionTokenCookie = cookies().get('sessionToken');

  // 2. check if the sessionToken has a valid session
  const session =
    sessionTokenCookie &&
    (await getValidSessionByToken(sessionTokenCookie.value));

  // 3. Either redirect or render the login form
  if (!session) redirect('/login?returnTo=/homepage');
  const exercises = await getExercises();
  return (
    <main>
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="search"
          className={styles.searchInput}
        />
      </div>
      <div className={styles.addToDiaryContainer}>
        <Modal
          triggerComponent={<button>Add to diary</button>}
          modalBody={<AddDiaryEntryForm exercisesList={exercises} />}
        />
      </div>
    </main>
  );
}
