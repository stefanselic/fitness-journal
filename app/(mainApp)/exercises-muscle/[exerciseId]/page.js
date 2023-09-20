import allExercises from './page';

// export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'exercises-muscle',
  description: 'Single exercise',
};

export default async function RootNotFound() {
  // console.log(`this is the result`, result);
  // const singleExercise = await res
  console.log(allExercises);
  return (
    <main>
      <div>SINGLE EXERCISE </div>
    </main>
  );
}
