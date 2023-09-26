// 'use client';

// import { useRouter } from 'next/router';
// import { useEffect, useState } from 'react';

// export default function ExerciseDetail() {
//   const router = useRouter();
//   const { name } = router.query;

//   const [exercise, setExercise] = useState(null);

//   useEffect(() => {
//     async function fetchExercise() {
//       if (name) {
//         try {
//           const response = await fetch(
//             `https://api.api-ninjas.com/v1/exercises?name=${name}`,
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
//           if (result.length > 0) {
//             setExercise(result[0]); // Assuming the API returns a single exercise with a unique name
//           }
//         } catch (error) {
//           console.error('Error: ', error);
//         }
//       }
//     }

//     fetchExercise();
//   }, [name]);

//   if (!exercise) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h1>{exercise.name}</h1>
//       <p>Instructions: {exercise.instructions}</p>
//     </div>
//   );
// }
