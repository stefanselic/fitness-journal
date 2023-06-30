import { cookies } from 'next/headers';
import { getValidSessionByToken } from '../../../database/sessions';
import { redirect } from 'next/navigation';
import styles from './page.module.scss';
import { getExercises } from '../../../database/exercises';
import { DiaryWithSets, getDiaries } from '../../../database/diaries';
import { getUserBySessionToken } from '../../../database/users';
import AddDiaryEntryModal from '../../_components/AddDiaryEntryForm/AddDiaryEntryModal';
import SearchBar from '../../_components/SearchBar/SearchBar';
import DiaryEntry from '../../_components/DiaryEntry/DiaryEntry';

export default async function HomePage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] };
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
      <div className={styles.mainContainer}>
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
                      <DiaryEntry diary={diary} key={`diary_${diary.id}`} />
                    ))}
                  </section>
                </div>
              ))}
        </div>
      </div>
    </main>
  );
}
