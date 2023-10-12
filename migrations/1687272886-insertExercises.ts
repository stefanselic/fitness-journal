import { Sql } from 'postgres';

export const exercises = [
  {
    id: 1,
    name: 'bench press',
    muscle: 'chest',
    instructions:
      '1.Lie flat on a bench with your feet planted firmly on the ground and your knees bent. 2.Grasp the barbell with an overhand grip slightly wider than shoulder-width apart. Make sure your hands are positioned evenly on the bar. 3.Inhale and slowly lower the barbell towards your chest, keeping your elbows at a 45-degree angle to your body. Lower the barbell until it touches your chest or reaches a comfortable depth. 4.Exhale and push the barbell upward in a controlled manner, extending your arms fully without locking your elbows. Keep your shoulder blades engaged and pressed firmly against the bench throughout the movement. HINT:Remember to choose an appropriate weight, maintain proper form, and engage your chest, shoulders, and triceps during the exercise. Its also important to have a spotter or use safety equipment when performing heavy bench presses.',
  },

  {
    id: 2,
    name: 'positive bench press',
    muscle: 'chest',
    instructions:
      '1.Lie flat on a bench with your feet planted firmly on the ground and your eyes positioned directly under the barbell. 2.Grip the barbell with hands slightly wider than shoulder-width apart, palms facing away from you. Lift the barbell off the rack, holding it above your chest with arms fully extended. 3.Lower the barbell towards your chest in a controlled manner, keeping your elbows at a 45-degree angle from your body. 4.Press the barbell back up to the starting position, fully extending your arms. Repeat for the desired number of repetitions. HINT:Remember to maintain proper form throughout the exercise, keeping your back flat against the bench and engaging your core. Its important to have a spotter or use safety equipment when performing the bench press to ensure safety and support, especially when lifting heavy weights.',
  },

  {
    id: 3,
    name: 'machine flys',
    muscle: 'chest',
    instructions:
      '1.Adjust the machines seat and handles to your desired position. Sit with your back against the seat, feet flat on the floor, and grasp the handles with your palms facing inward. 2.Keep your elbows slightly bent and your chest up. Begin the movement by bringing the handles together in front of your chest, focusing on squeezing your chest muscles. 3.Pause briefly at the end of the contraction, feeling the stretch in your chest muscles. 4.Slowly release the handles and return them to the starting position, allowing your chest muscles to stretch. Repeat for the desired number of repetitions. HINT:Remember to maintain proper form throughout the exercise, avoiding excessive swinging or using momentum. Focus on using your chest muscles to perform the movement and adjust the weight on the machine according to your fitness level and goals.',
  },

  {
    id: 4,
    name: 'lat pulldowns',
    muscle: 'back',
    instructions:
      '1.Sit at the lat pulldown machine with your knees placed firmly under the leg pads, feet flat on the floor. 2.Grasp the wide bar with an overhand grip, slightly wider than shoulder-width apart. Relax your shoulders, engage your core, and maintain a straight posture. 3.Pull the bar down towards your upper chest while keeping your elbows pointing downward. Focus on squeezing your shoulder blades together and engaging your back muscles. 4.Slowly release the bar back to the starting position, fully extending your arms. Repeat for the desired number of repetitions. HINT:Remember to maintain proper form throughout the exercise, avoiding excessive swinging or using momentum. Focus on using your back muscles to perform the movement and adjust the weight on the machine according to your fitness level and goals.',
  },

  {
    id: 5,
    name: 't-bar row',
    muscle: 'back',
    instructions:
      '1.Stand with your feet shoulder-width apart, straddling the T-bar machine. Position a loaded barbell securely in the open end of the T-bar. 2.Bend your knees slightly and hinge forward at the hips while keeping your back straight. Reach down and grip the handles or the barbell with an overhand grip. 3.Pull the barbell towards your torso by retracting your shoulder blades and driving your elbows back. Keep your core engaged and your back straight throughout the movement. 4.Squeeze your back muscles at the top of the movement, then slowly lower the barbell back to the starting position in a controlled manner. Repeat for the desired number of repetitions. HINT:Remember to maintain proper form throughout the exercise, avoiding excessive rounding or arching of the back. Focus on using your back muscles to perform the movement and adjust the weight on the barbell according to your fitness level and goals.',
  },
  {
    id: 6,
    name: 'seated cable rows',
    muscle: 'back',
    instructions:
      '1.Sit on the cable row machine with your feet placed on the footrests, knees slightly bent, and your back straight. 2.Grasp the cable handles with an overhand grip, hands shoulder-width apart. Keep your arms extended in front of you, and your shoulders relaxed. 3.Pull the handles towards your midsection by retracting your shoulder blades and driving your elbows back. Focus on squeezing your back muscles and keeping your core engaged. 4.Pause briefly at the fully contracted position, then slowly release the handles back to the starting position, maintaining control throughout the movement. Repeat for the desired number of repetitions. HINT:Remember to maintain proper form throughout the exercise, avoiding excessive leaning back or using momentum. Focus on using your back muscles to perform the movement and adjust the weight on the cable machine according to your fitness level and goals.',
  },

  {
    id: 7,
    name: 'shoulder press',
    muscle: 'shoulder',
    instructions:
      '1.Stand or sit with your feet shoulder-width apart, holding dumbbells or a barbell at shoulder level. Ensure your palms are facing forward and your elbows are bent. 2.Press the weights upward by extending your arms fully, keeping your core engaged and your back straight. Exhale as you lift. 3.Continue to push the weights upward until your arms are fully extended overhead. Keep your shoulders down and avoid shrugging them up. 4.Slowly lower the weights back down to the starting position by bending your elbows, inhaling as you lower. Repeat for the desired number of repetitions.HINT:Remember to maintain proper form throughout the exercise, avoiding excessive arching of the back or using momentum. Focus on using your shoulder muscles to perform the movement and adjust the weight of the dumbbells or barbell according to your fitness level and goals.',
  },
  {
    id: 8,
    name: 'standing dumbell front raises',
    muscle: 'shoulder',
    instructions:
      '1.Stand with your feet shoulder-width apart, holding a dumbbell in each hand, palms facing your body. Let your arms hang naturally by your sides. 2.Keeping your back straight and core engaged, exhale and lift the dumbbells directly in front of you. Keep your arms straight or with a slight bend in the elbows. 3.Continue lifting until the dumbbells reach shoulder level or just slightly below, while maintaining control and avoiding swinging or using momentum. 4.Slowly lower the dumbbells back down to the starting position, inhaling as you lower. Repeat for the desired number of repetitions HINT:Remember to maintain proper form throughout the exercise, avoiding excessive leaning back or using momentum. Focus on using your shoulder muscles to perform the movement and adjust the weight of the dumbbells according to your fitness level and goals.',
  },
  {
    id: 9,
    name: 'bent-over lateral raises',
    muscle: 'shoulder',
    instructions:
      '1.Set up an incline bench at approximately a 45-degree angle. Place your chest against the top of the bench and hold a dumbbell in each hand, palms facing each other. Allow your arms to hang naturally towards the floor. 2.Extend your legs behind you and plant your feet firmly on the ground for stability. Keep your back straight and engage your core muscles. 3.Exhale and lift the dumbbells out to the sides, away from your body, while keeping a slight bend in your elbows. Focus on squeezing your shoulder blades together and engaging your shoulder muscles. 4.Continue the upward motion until your arms are parallel to the floor or slightly higher. Pause briefly at the top of the movement, then slowly lower the dumbbells back down to the starting position, inhaling as you lower. Repeat for the desired number of repetitions. HINT:Remember to maintain proper form throughout the exercise, keeping your back straight and core engaged. Avoid swinging or using momentum to lift the weights. Focus on using your shoulder muscles to perform the movement and adjust the weight of the dumbbells according to your fitness level and goals.',
  },

  {
    id: 10,
    name: 'ez barbell curls',
    muscle: 'biceps',
    instructions:
      '1.Stand with your feet shoulder-width apart, holding an EZ barbell with an underhand grip (palms facing upward). Let your arms hang naturally by your sides, with the barbell resting against your thighs. 2.Keep your upper arms stationary, exhale, and slowly curl the barbell upward by contracting your biceps. Keep your elbows close to your sides and focus on squeezing your biceps as you lift. 3.Continue the upward motion until the barbell is at shoulder level or your biceps are fully contracted. Pause briefly at the top of the movement. 4.Inhale and slowly lower the barbell back down to the starting position, allowing your arms to fully extend. Repeat for the desired number of repetitions. HINT:Remember to maintain proper form throughout the exercise, avoiding excessive swinging or using momentum. Focus on using your biceps to perform the movement and control the weight throughout the entire range of motion. Adjust the weight of the EZ barbell according to your fitness level and goals.',
  },

  {
    id: 11,
    name: 'cable curls',
    muscle: 'biceps',
    instructions:
      '1.Stand facing a cable machine with your feet shoulder-width apart. Adjust the cable attachment to a low position and attach a straight bar handle. 2.Grasp the handle with an underhand grip (palms facing upward), keeping your elbows close to your sides. Start with your arms fully extended and the cable providing tension. 3.Exhale and curl the handle upward, keeping your upper arms stationary and focusing on contracting your biceps. Continue the movement until your forearms are close to your biceps and you feel a strong contraction in your biceps. 4.Inhale and slowly lower the handle back down to the starting position, maintaining control and allowing your arms to fully extend. Repeat for the desired number of repetitions. HINT:Remember to maintain proper form throughout the exercise, avoiding excessive swinging or using momentum. Focus on using your biceps to perform the movement and control the weight throughout the entire range of motion. Adjust the weight on the cable machine according to your fitness level and goals.',
  },

  {
    id: 12,
    name: 'standing hammer curls',
    muscle: 'biceps',
    instructions:
      '1.Stand with your feet shoulder-width apart, holding a dumbbell in each hand, palms facing your body (neutral grip). Let your arms hang naturally by your sides. 2.Keep your back straight and engage your core. Exhale and curl the dumbbells upward, keeping your elbows close to your sides and your palms facing your body throughout the movement. 3.Continue the upward motion until your forearms are close to your biceps and you feel a strong contraction in your biceps. Focus on squeezing your biceps as you lift. 4.Inhale and slowly lower the dumbbells back down to the starting position, maintaining control and allowing your arms to fully extend. Repeat for the desired number of repetitions. HINT:Remember to maintain proper form throughout the exercise, avoiding excessive swinging or using momentum. Focus on using your biceps to perform the movement and control the weight throughout the entire range of motion. Adjust the weight of the dumbbells according to your fitness level and goals.',
  },

  {
    id: 13,
    name: 'triceps pushdowns',
    muscle: 'triceps',
    instructions:
      '1.Stand facing a cable machine with your feet shoulder-width apart. Attach a straight bar handle to the high pulley. 2.Grasp the handle with an overhand grip (palms facing down), keeping your elbows close to your sides and your upper arms stationary. Start with your arms fully extended and the cable providing tension. 3.Exhale and push the handle downward, extending your elbows and focusing on contracting your triceps. Keep your upper arms stationary throughout the movement. 4.Continue the downward motion until your arms are fully extended and you feel a strong contraction in your triceps. Pause briefly at the bottom of the movement, then inhale and slowly return the handle back up to the starting position. Repeat for the desired number of repetitions. HINT:Remember to maintain proper form throughout the exercise, avoiding excessive swinging or using momentum. Focus on using your triceps to perform the movement and control the weight throughout the entire range of motion. Adjust the weight on the cable machine according to your fitness level and goals.',
  },
  {
    id: 14,
    name: 'overhead triceps extensions',
    muscle: 'triceps',
    instructions:
      '1.Stand facing away from a cable machine with your feet shoulder-width apart. Attach a rope handle or straight bar handle to the high pulley. 2.Reach up and grasp the handle with an overhand grip (palms facing down) and bring it behind your head, elbows bent and close to your ears. 3.Exhale and extend your arms upward, fully straightening your elbows and focusing on contracting your triceps. Keep your upper arms stationary throughout the movement. 4.Continue the upward motion until your arms are fully extended and you feel a strong contraction in your triceps. Pause briefly at the top of the movement, then inhale and slowly lower the handle back down behind your head. Repeat for the desired number of repetitions. HINT:Remember to maintain proper form throughout the exercise, avoiding excessive swinging or using momentum. Focus on using your triceps to perform the movement and control the weight throughout the entire range of motion. Adjust the weight on the cable machine according to your fitness level and goals.',
  },

  {
    id: 15,
    name: 'triceps kickbacks',
    muscle: 'triceps',
    instructions:
      '1.Stand with your feet shoulder-width apart and hold a dumbbell in your right hand. Hinge forward at the hips, keeping your back straight and parallel to the ground. Bend your right arm to a 90-degree angle, bringing your upper arm parallel to your torso. 2.Engage your core and exhale as you extend your right arm backward, fully straightening it. Keep your upper arm stationary and parallel to the ground throughout the movement. 3.Pause briefly at the top of the movement, focusing on contracting your triceps. Feel the tension in your triceps muscles. 4.Inhale and slowly return your right arm to the starting position, bending it back to a 90-degree angle. Repeat for the desired number of repetitions, then switch to the left arm. HINT:Remember to maintain proper form throughout the exercise, avoiding excessive swinging or using momentum. Focus on using your triceps to perform the movement and control the weight of the dumbbell. Adjust the weight according to your fitness level and goals.',
  },
  {
    id: 16,
    name: 'hackenschmidt machine squats',
    muscle: 'leg',
    instructions:
      '1.Adjust the Hackenschmidt machine to fit your body by setting the foot platform and shoulder pads to the appropriate height. Stand inside the machine with your feet shoulder-width apart and positioned slightly forward.2.Position your shoulders under the shoulder pads and secure them in place. Ensure that your upper back is firmly against the backrest for stability. 3.Engage your core, maintain a straight back, and brace your abdominal muscles. Inhale, unlock your hips, and begin to lower your body by bending your knees and pushing your hips back. 4.Continue descending until your thighs are parallel to the ground or slightly below. Ensure that your knees track in line with your toes, and avoid letting them collapse inward. Exhale and push through your feet to extend your legs and return to the starting position. Repeat for the desired number of repetitions.HINT:Remember to maintain proper form throughout the exercise, keeping your knees stable and tracking in line with your toes. Keep your back against the backrest and avoid rounding or arching your spine. Adjust the weight on the machine according to your fitness level and goals.',
  },
  {
    id: 17,
    name: 'leg raises',
    muscle: 'leg',
    instructions:
      '1.Lie flat on your back on a mat or bench, with your legs fully extended and your arms resting by your sides. Keep your lower back pressed against the surface to maintain stability. 2.Engage your core muscles by gently contracting your abdominal muscles. This will help stabilize your torso throughout the exercise. 3.Keeping your legs together and straight, slowly lift them upward until they are perpendicular to the floor or as high as you can comfortably go without straining your lower back. 4.Pause briefly at the top of the movement, focusing on engaging your abdominal muscles. Slowly lower your legs back down to the starting position in a controlled manner. Repeat for the desired number of repetitions.HINT:Remember to maintain proper form throughout the exercise, avoiding any jerking or swinging motions. Focus on using your abdominal muscles to lift your legs, rather than relying on momentum. Adjust the difficulty of the exercise by either bending your knees slightly or using ankle weights as your strength increases.',
  },

  {
    id: 18,
    name: 'leg curls',
    muscle: 'leg',
    instructions:
      '1.Adjust the leg curl machine to fit your body by setting the leg pad and seat height according to your comfort. Lie face down on the machine with your legs fully extended and the back of your ankles resting against the leg pad. 2.Grasp the handles or side supports of the machine for stability. Engage your core muscles and keep your hips pressed against the bench throughout the exercise. 3.Exhale and bend your knees, curling your legs upward as you contract your hamstrings. Keep your upper legs stationary and avoid lifting your hips off the bench. 4.Continue the upward motion until your legs are fully bent and the leg pad is close to or touching your glutes. Hold the contraction for a moment, then inhale and slowly lower your legs back to the starting position in a controlled manner. Repeat for the desired number of repetitions. HINT:Remember to maintain proper form throughout the exercise, avoiding any jerking or swinging motions. Focus on using your hamstrings to curl your legs, keeping tension on the muscles throughout the movement. Adjust the weight on the machine according to your fitness level and goals.',
  },
  {
    id: 19,
    name: 'crunches',
    muscle: 'abs',
    instructions:
      '1.Lie flat on your back on a mat with your knees bent and feet flat on the ground. Place your hands lightly behind your head, avoiding pulling on your neck or head during the exercise. 2.Engage your core muscles by gently contracting your abdominal muscles. This will help stabilize your torso throughout the exercise. 3.Exhale and lift your head, neck, and shoulder blades off the ground, curling your upper body towards your knees. Keep your lower back pressed into the mat and maintain a slight gap between your chin and chest. 4.At the top of the movement, pause briefly and focus on contracting your abdominal muscles. Inhale and slowly lower your upper body back down to the starting position in a controlled manner. Repeat for the desired number of repetitions. HINT:Remember to maintain proper form throughout the exercise, avoiding any jerking or pulling motions. Keep your focus on engaging your abdominal muscles and using them to lift your upper body, rather than relying on momentum. Adjust the difficulty of the exercise by either extending your arms in front of you or adding resistance by placing your hands on your chest.',
  },

  {
    id: 20,
    name: 'leg lift',
    muscle: 'abs',
    instructions:
      '1.Lie flat on your back on a mat with your legs fully extended and your arms resting by your sides. Keep your lower back pressed against the mat to maintain stability. 2.Engage your core muscles by gently contracting your abdominal muscles. This will help stabilize your torso throughout the exercise. 3.Keeping your legs straight and together, slowly lift them upward off the ground, using your lower abdominal muscles. Continue lifting until your legs are perpendicular to the floor or as high as you can comfortably go without straining your lower back. 4.Pause briefly at the top of the movement, focusing on engaging your lower abdominal muscles. Slowly lower your legs back down to the starting position in a controlled manner. Repeat for the desired number of repetitions. HINT:Remember to maintain proper form throughout the exercise, avoiding any swinging or jerking motions. Focus on using your lower abdominal muscles to lift your legs, rather than relying on momentum. Adjust the difficulty of the exercise by either bending your knees slightly or adding ankle weights as your strength increases.',
  },

  {
    id: 21,
    name: 'heel touches',
    muscle: 'abs',
    instructions:
      '1.Lie flat on your back with legs extended and arms by your sides. 2.Lift your upper body off the ground, reaching towards your feet. 3.Twist your torso to the right, reaching your right hand towards your right heel. 4.Return to the starting position and twist your torso to the left, reaching your left hand towards your left heel. 5.Repeat steps 3 and 4 for the desired number of repetitions or time, alternating sides with each twist. Remember to engage your abdominal muscles and maintain proper form throughout the exercise.',
  },

  {
    id: 22,
    name: 'Smith Machine Calf Raise',
    muscle: 'calves',
    instructions:
      'Place a block or weight plate below the bar on the Smith machine. Set the bar to a position that best matches your height. Once the correct height is chosen and the bar is loaded, step onto the plates with the balls of your feet and place the bar on the back of your shoulders. Take the bar with both hands facing forward. Rotate the bar to unrack it. This will be your starting position. Raise your heels as high as possible by pushing off of the balls of your feet, flexing your calf at the top of the contraction. Your knees should remain extended. Hold the contracted position for a second before you start to go back down. Return slowly to the starting position as you breathe in while lowering your heels. Repeat for the recommended amount of repetitions.',
  },
  {
    id: 23,
    name: 'Rickshaw Carry',
    muscle: 'forearms',
    instructions:
      'Position the frame at the starting point, and load with the appropriate weight. Standing in the center of the frame, begin by gripping the handles and driving through your heels to lift the frame. Ensure your chest and head are up and your back is straight. Immediately begin walking briskly with quick, controlled steps. Keep your chest up and head forward, and make sure you continue breathing. Bring the frame to the ground after you have reached the end point.',
  },

  {
    id: 24,
    name: 'Single-Leg Press',
    muscle: 'Quadriceps',
    instructions:
      'Load the sled to an appropriate weight. Seat yourself on the machine, planting one foot on the platform in line with your hip. Your free foot can be placed on the ground. Maintain good spinal position with your head and chest up. Supporting the weight, fully extend the knee and unlock the sled. This will be your starting position. Lower the weight by flexing the hip and knee, continuing as far as flexibility allows. Do not allow your lumbar to take the load by moving your pelvis. At the bottom of the motion pause briefly and then return to the starting position by extending the hip and knee. Complete all repetitions for one leg before switching to the other.',
  },

  {
    id: 25,
    name: 'Landmine twist',
    muscle: 'Abdominals',
    instructions:
      'Position a bar into a landmine or securely anchor it in a corner. Load the bar to an appropriate weight. Raise the bar from the floor, taking it to shoulder height with both hands with your arms extended in front of you. Adopt a wide stance. This will be your starting position. Perform the movement by rotating the trunk and hips as you swing the weight all the way down to one side. Keep your arms extended throughout the exercise. Reverse the motion to swing the weight all the way to the opposite side. Continue alternating the movement until the set is complete.',
  },

  {
    id: 26,
    name: 'Barbell glute bridge',
    muscle: 'Glutes',
    instructions:
      'Position a bar into a landmine or securely anchor it in a corner. Load the bar to an appropriate weight. Raise the bar from the floor, taking it to shoulder height with both hands with your arms extended in front of you. Adopt a wide stance. This will be your starting position. Perform the movement by rotating the trunk and hips as you swing the weight all the way down to one side. Keep your arms extended throughout the exercise. Reverse the motion to swing the weight all the way to the opposite side. Continue alternating the movement until the set is complete.',
  },

  {
    id: 27,
    name: 'Thigh adductor',
    muscle: 'Adductors',
    instructions:
      'Begin seated on the ground with a loaded barbell over your legs. Using a fat bar or having a pad on the bar can greatly reduce the discomfort caused by this exercise. Roll the bar so that it is directly above your hips, and lay down flat on the floor. Begin the movement by driving through with your heels, extending your hips vertically through the bar. Your weight should be supported by your upper back and the heels of your feet. Extend as far as possible, then reverse the motion to return to the starting position.',
  },
];

export async function up(sql: Sql) {
  for (const exercise of exercises) {
    await sql`

    INSERT INTO exercises
      (
        name,
        muscle,
        instructions
      )
    VALUES
      (
        ${exercise.name},
        ${exercise.muscle},
        ${exercise.instructions}
      )
  `;
  }
}

export async function down(sql: Sql) {
  await sql`
    DELETE FROM exercises
  `;
}
