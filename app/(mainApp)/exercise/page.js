// 'use client';

// import Link from 'next/link';
// import { useEffect, useState } from 'react';
// import styles from '../exercise/page.module.scss';

// export default function ExerciseList() {
//   const muscles = ['calves', 'forearms', 'lower_back'];

//   const [exercises, setExercises] = useState([]);

//   useEffect(() => {
//     async function fetchExercises() {
//       try {
//         const results = [];

//         for (const muscle of muscles) {
//           const response = await fetch(
//             `https://api.api-ninjas.com/v1/exercises?muscle=${muscle}`,
//             {
//               method: 'GET',
//               headers: {
//                 'X-Api-Key': 'Fiy5RZxu2HF/hbu3My6p3A==TSdTBXwsxajuXfoi',
//                 'Content-Type': 'application/json',
//               },
//             },
//           );

//           if (!response.ok) {
//             throw new Error('Network response was not ok');
//           }

//           const result = await response.json();
//           // Slice the result to include only the first 3 exercises
//           const slicedExercises = result.slice(0, 3);
//           results.push({ muscle, exercises: slicedExercises });
//         }

//         setExercises(results);
//         console.log(results);
//         const allExercises = results;
//         console.log(allExercises);
//       } catch (error) {
//         console.error('Error: ', error);
//       }
//     }
//     fetchExercises();
//   }, []);

//   return (
//     <div className={styles.container}>
//       {exercises.map((muscleExercises) => (
//         <div key={muscleExercises.muscle}>
//           {muscleExercises.exercises.map((exercise) => (
//             <>
//               <div className={styles.exerciseContainer}>
//                 <Link
//                   href={`/exercise/${exercise.name}`}
//                   className={styles.link}
//                 >
//                   <li key={exercise.id}> {exercise.name}</li>
//                 </Link>
//               </div>
//               {/* <li>Instructions: {exercise.instructions}</li> */}
//             </>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// }
