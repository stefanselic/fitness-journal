import { cookies } from 'next/headers';
import { getValidSessionByToken } from '../../../database/sessions';
import { redirect } from 'next/navigation';
import styles from './page.module.scss';
import Modal from '../../_components/Modal/Modal';
import AddDiaryEntryForm from '../../_components/AddDiaryEntryForm/AddDiaryEntryForm';
import { getExercises } from '../../../database/exercises';
import { DiaryWithSets, getDiaries } from '../../../database/diaries';
import Image from 'next/image';
import { getUserBySessionToken } from '../../../database/users';
import AddDiaryEntryModal from '../../_components/AddDiaryEntryForm/AddDiaryEntryModal';
// import { catchPayload } from '../../api/(auth)/homepage/route';

export default async function HomePage() {
  // 1. Check if the sessionToken cookie exit
  const sessionTokenCookie = cookies().get('sessionToken');

  // 2. check if the sessionToken has a valid session
  const session =
    sessionTokenCookie &&
    (await getValidSessionByToken(sessionTokenCookie.value));

  // 3. Either redirect or render the login form
  if (!session) redirect('/login?returnTo=/homepage');

  const user = !sessionTokenCookie.value
    ? undefined
    : await getUserBySessionToken(sessionTokenCookie.value);

  console.log('USEr', user?.id);

  const exercises = await getExercises();
  const diaries = user ? await getDiaries(user.id) : [];

  const groupedData: DiaryWithSets[] = diaries.reduce(
    (groups: any, element: any) => {
      const date = element.date.toISOString().split('T')[0];
      if (!groups[date]) {
        groups[date] = [];
      }
      groups[date].push(element);
      return groups;
    },
    {},
  );

  return (
    <main>
      <div className={styles.searchContainer}>
        <input placeholder="search" className={styles.searchInput} />
      </div>
      <div className={styles.addToDiaryContainer}>
        <AddDiaryEntryModal exercises={exercises} user={user} />
      </div>
      <div>
        <div>
          <span className={styles.border} />
        </div>

        {groupedData &&
          Object.entries(groupedData)
            .sort(([dateA], [dateB]) => {
              return new Date(dateB).getTime() - new Date(dateA).getTime();
            })
            .map((entry) => (
              <div key={`diary_${entry[1]}`} className={styles.groupWrapper}>
                <h5>Date: {entry[0]}</h5>
                <section className={styles.section}>
                  {entry[1].map((diary: DiaryWithSets) => (
                    <div
                      key={`diary ${diary.id}`}
                      className={styles.exerciseContainer}
                    >
                      <div>
                        <Image
                          className={styles.exerciseImage}
                          style={{
                            objectFit: 'contain',
                          }}
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
            ))}
      </div>
    </main>
  );
}
