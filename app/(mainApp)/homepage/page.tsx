import { cookies } from 'next/headers';
import { getValidSessionByToken } from '../../../database/sessions';
import { redirect } from 'next/navigation';
import styles from './page.module.scss';
import { getExercises } from '../../../database/exercises';
import { DiaryWithSets, getDiaries } from '../../../database/diaries';
import Image from 'next/image';
import { getUserBySessionToken } from '../../../database/users';
import AddDiaryEntryModal from '../../_components/AddDiaryEntryForm/AddDiaryEntryModal';
import SearchBar from './SearchBar';
import DeleteButton from './DeleteButton';

export default async function HomePage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
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

  const exercises = await getExercises();
  const diaries = user
    ? searchParams && searchParams.search
      ? await getDiaries(user.id, `%${searchParams.search}%`)
      : await getDiaries(user.id)
    : [];

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
      <SearchBar />
      <div className={styles.addToDiaryContainer}>
        <AddDiaryEntryModal exercises={exercises} user={user} />
      </div>
      <div>
        {groupedData &&
          Object.entries(groupedData)
            .sort(([dateA], [dateB]) => {
              return new Date(dateB).getTime() - new Date(dateA).getTime();
            })
            .map((entry, index) => (
              <div
                key={`diary_${entry[1]}_${index}`}
                className={styles.groupWrapper}
              >
                <h5 className={styles.date}>Date: {entry[0]}</h5>
                <section className={styles.section}>
                  {entry[1].map((diary: DiaryWithSets) => (
                    <div
                      key={`diary ${diary.id}`}
                      className={styles.exerciseContainer}
                    >
                      <div>
                        <Image
                          className={styles.exerciseImage}
                          alt="exercise"
                          src={`/images/${diary.name}.png`}
                          width={200}
                          height={150}
                        />
                      </div>
                      <div>
                        <div className={styles.exerciseName}>
                          <b>{diary.name?.toUpperCase()}</b>
                        </div>
                        <ol>
                          {diary.sets.map((set, index) => (
                            <li key={index}>
                              <span className={styles.exerciseSets}>Set</span>
                              <span className={styles.exerciseReps}>
                                {set.reps}reps
                              </span>
                              <span>{set.weight}kg</span>
                            </li>
                          ))}
                        </ol>
                        <div>
                          <DeleteButton diaryId={diary.id} />
                        </div>
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
