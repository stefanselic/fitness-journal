import { cookies } from 'next/headers';
import { getValidSessionByToken } from '../../../database/sessions';
import { redirect } from 'next/navigation';
import styles from './page.module.scss';
import Modal from '../../_components/Modal/Modal';
import AddDiaryEntryForm from '../../_components/AddDiaryEntryForm/AddDiaryEntryForm';
import { getExercises } from '../../../database/exercises';
import { getDiaries } from '../../../database/diaries';
import Image from 'next/image';

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
  const diaries = await getDiaries();
  console.log(diaries);

  return (
    <main>
      <div className={styles.searchContainer}>
        <input placeholder="search" className={styles.searchInput} />
      </div>
      <div className={styles.addToDiaryContainer}>
        <Modal
          triggerComponent={
            <button className={styles.button}>Add to diary</button>
          }
          modalBody={<AddDiaryEntryForm exercisesList={exercises} />}
        />
      </div>
      <div>
        <div>
          <h4>Diaries</h4>
          <span className={styles.border} />
        </div>
        <section className={styles.section}>
          {diaries.length > 0 &&
            diaries.map((diary) => (
              <div
                key={`diary ${diary.id}`}
                className={styles.exerciseContainer}
              >
                <div>
                  <Image
                    className={styles.exerciseImage}
                    alt="exercise"
                    src={`/images/${diary.name}.png`}
                    width={250}
                    height={150}
                  />
                </div>
                <div>
                  <div className={styles.exerciseName}>
                    <b>{diary.name?.toUpperCase()}</b>
                  </div>
                  <ol className={styles.exerciseWeightsReps}>
                    {diary.sets.map((set, index) => (
                      <li key={index}>
                        <div>
                          <span>Weight:{set.weight}---</span>
                          <span>Reps:{set.reps}</span>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            ))}
        </section>
      </div>
    </main>
  );
}
