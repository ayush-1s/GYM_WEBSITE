// import React from 'react';
// import styled from 'styled-components';

// const BroSplit = () => {
//   return (
//     <Container>
//       <Title>Bro Split Workout Split</Title>

//       <DaySection>
//         <DayTitle>Day 1: Chest</DayTitle>
//         <DayFocus>Focus: Exercises targeting the chest muscles (pectorals).</DayFocus>
//         <ExerciseList>
//           <li>Bench Press (Flat, Incline, or Decline): 4 sets x 8-12 reps</li>
//           <li>Dumbbell Flyes: 3 sets x 10-15 reps</li>
//           <li>Chest Press Machine: 3 sets x 10-12 reps</li>
//           <li>Cable Crossovers: 3 sets x 12-15 reps</li>
//         </ExerciseList>
//       </DaySection>

//       <DaySection>
//         <DayTitle>Day 2: Back</DayTitle>
//         <DayFocus>Focus: Exercises targeting the back muscles (latissimus dorsi, traps, rhomboids).</DayFocus>
//         <ExerciseList>
//           <li>Pull-ups or Lat Pull-downs: 4 sets x 8-12 reps</li>
//           <li>Bent-Over Rows (Barbell or Dumbbell): 3 sets x 8-12 reps</li>
//           <li>Seated Cable Rows: 3 sets x 10-12 reps</li>
//           <li>Deadlifts (Conventional or Romanian): 3 sets x 6-10 reps</li>
//         </ExerciseList>
//       </DaySection>

//       <DaySection>
//         <DayTitle>Day 3: Shoulders</DayTitle>
//         <DayFocus>Focus: Exercises targeting the shoulder muscles (deltoids).</DayFocus>
//         <ExerciseList>
//           <li>Overhead Shoulder Press (Barbell or Dumbbell): 4 sets x 8-12 reps</li>
//           <li>Lateral Raises: 3 sets x 10-15 reps</li>
//           <li>Front Raises: 3 sets x 10-15 reps</li>
//           <li>Rear Delt Flyes (Machine or Dumbbell): 3 sets x 12-15 reps</li>
//         </ExerciseList>
//       </DaySection>

//       <DaySection>
//         <DayTitle>Day 4: Arms</DayTitle>
//         <DayFocus>Focus: Exercises targeting the arms (biceps and triceps).</DayFocus>
//         <ExerciseList>
//           <li>Barbell Curls: 4 sets x 8-12 reps</li>
//           <li>Skull Crushers: 3 sets x 8-12 reps</li>
//           <li>Hammer Curls: 3 sets x 10-15 reps</li>
//           <li>Tricep Dips or Cable Push-downs: 3 sets x 10-15 reps</li>
//         </ExerciseList>
//       </DaySection>

//       <DaySection>
//         <DayTitle>Day 5: Legs</DayTitle>
//         <DayFocus>Focus: Exercises targeting the lower body (quadriceps, hamstrings, glutes, calves).</DayFocus>
//         <ExerciseList>
//           <li>Squats (Back or Front): 4 sets x 8-12 reps</li>
//           <li>Leg Press: 3 sets x 10-15 reps</li>
//           <li>Lunges (Walking or Reverse): 3 sets x 10-12 reps per leg</li>
//           <li>Leg Curls (Lying or Seated): 3 sets x 10-15 reps</li>
//           <li>Calf Raises (Standing or Seated): 4 sets x 12-15 reps</li>
//         </ExerciseList>
//       </DaySection>

//       <Notes>
//         <NoteTitle>Notes:</NoteTitle>
//         <NotePoint>Frequency: Each muscle group is trained once per week, allowing for ample recovery time.</NotePoint>
//         <NotePoint>Volume: Higher volume per session allows for focused training of specific muscle groups.</NotePoint>
//         <NotePoint>Progression: Increase weights gradually to continue challenging your muscles and promoting growth.</NotePoint>
//         <NotePoint>Rest: Ensure adequate rest between sets and days, and consider incorporating a rest day or active recovery day after each cycle.</NotePoint>
//       </Notes>
//     </Container>
//   );
// };

// const Container = styled.div`
//   max-width: 800px;
//   margin: 0 auto;
//   padding: 20px;
// `;

// const Title = styled.h1`
//   font-size: 28px;
//   margin-bottom: 20px;
// `;

// const DaySection = styled.div`
//   margin-top: 30px;
// `;

// const DayTitle = styled.h2`
//   font-size: 24px;
//   margin-bottom: 10px;
// `;

// const DayFocus = styled.p`
//   font-size: 18px;
//   color: #555;
// `;

// const ExerciseList = styled.ul`
//   list-style-type: disc;
//   margin-left: 20px;
//   font-size: 16px;
// `;

// const Notes = styled.div`
//   margin-top: 30px;
// `;

// const NoteTitle = styled.h3`
//   font-size: 20px;
//   margin-bottom: 10px;
// `;

// const NotePoint = styled.p`
//   font-size: 16px;
//   margin-bottom: 8px;
// `;

// export default BroSplit;


import React from 'react';
import styled, { keyframes } from 'styled-components';

const BroSplit = () => {
  return (
    <Container>
      <Title>Bro Split Workout Split</Title>

      <DaySection>
        <DayTitle>Day 1: Chest</DayTitle>
        <DayFocus>Focus: Exercises targeting the chest muscles (pectorals).</DayFocus>
        <ExerciseList>
          <li>Bench Press (Flat, Incline, or Decline): 4 sets x 8-12 reps</li>
          <li>Dumbbell Flyes: 3 sets x 10-15 reps</li>
          <li>Chest Press Machine: 3 sets x 10-12 reps</li>
          <li>Cable Crossovers: 3 sets x 12-15 reps</li>
        </ExerciseList>
      </DaySection>

      <DaySection>
        <DayTitle>Day 2: Back</DayTitle>
        <DayFocus>Focus: Exercises targeting the back muscles (latissimus dorsi, traps, rhomboids).</DayFocus>
        <ExerciseList>
          <li>Pull-ups or Lat Pull-downs: 4 sets x 8-12 reps</li>
          <li>Bent-Over Rows (Barbell or Dumbbell): 3 sets x 8-12 reps</li>
          <li>Seated Cable Rows: 3 sets x 10-12 reps</li>
          <li>Deadlifts (Conventional or Romanian): 3 sets x 6-10 reps</li>
        </ExerciseList>
      </DaySection>

      <DaySection>
        <DayTitle>Day 3: Shoulders</DayTitle>
        <DayFocus>Focus: Exercises targeting the shoulder muscles (deltoids).</DayFocus>
        <ExerciseList>
          <li>Overhead Shoulder Press (Barbell or Dumbbell): 4 sets x 8-12 reps</li>
          <li>Lateral Raises: 3 sets x 10-15 reps</li>
          <li>Front Raises: 3 sets x 10-15 reps</li>
          <li>Rear Delt Flyes (Machine or Dumbbell): 3 sets x 12-15 reps</li>
        </ExerciseList>
      </DaySection>

      <DaySection>
        <DayTitle>Day 4: Arms</DayTitle>
        <DayFocus>Focus: Exercises targeting the arms (biceps and triceps).</DayFocus>
        <ExerciseList>
          <li>Barbell Curls: 4 sets x 8-12 reps</li>
          <li>Skull Crushers: 3 sets x 8-12 reps</li>
          <li>Hammer Curls: 3 sets x 10-15 reps</li>
          <li>Tricep Dips or Cable Push-downs: 3 sets x 10-15 reps</li>
        </ExerciseList>
      </DaySection>

      <DaySection>
        <DayTitle>Day 5: Legs</DayTitle>
        <DayFocus>Focus: Exercises targeting the lower body (quadriceps, hamstrings, glutes, calves).</DayFocus>
        <ExerciseList>
          <li>Squats (Back or Front): 4 sets x 8-12 reps</li>
          <li>Leg Press: 3 sets x 10-15 reps</li>
          <li>Lunges (Walking or Reverse): 3 sets x 10-12 reps per leg</li>
          <li>Leg Curls (Lying or Seated): 3 sets x 10-15 reps</li>
          <li>Calf Raises (Standing or Seated): 4 sets x 12-15 reps</li>
        </ExerciseList>
      </DaySection>

      <Notes>
        <NoteTitle>Notes:</NoteTitle>
        <NotePoint>Frequency: Each muscle group is trained once per week, allowing for ample recovery time.</NotePoint>
        <NotePoint>Volume: Higher volume per session allows for focused training of specific muscle groups.</NotePoint>
        <NotePoint>Progression: Increase weights gradually to continue challenging your muscles and promoting growth.</NotePoint>
        <NotePoint>Rest: Ensure adequate rest between sets and days, and consider incorporating a rest day or active recovery day after each cycle.</NotePoint>
      </Notes>
    </Container>
  );
};

// Keyframes for background color animation
const changeBackground = keyframes`
  0% { background-color: #f9f9f9; }
  25% { background-color: #e6f7ff; }
  50% { background-color: #e6ffe6; }
  75% { background-color: #fff5e6; }
  100% { background-color: #f9f9f9; }
`;

// Keyframes for slide-in from bottom animation
const slideInFromBottom = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  animation: ${changeBackground} 10s infinite, ${slideInFromBottom} 2s ease-in;
`;

const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 20px;
  color: #333;
`;

const DaySection = styled.div`
  margin-top: 30px;
  animation: ${slideInFromBottom} 2s ease-in;
`;

const DayTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  color: #1a73e8;
`;

const DayFocus = styled.p`
  font-size: 18px;
  color: #555;
`;

const ExerciseList = styled.ul`
  list-style-type: disc;
  margin-left: 20px;
  font-size: 16px;
  color: #333;
`;

const Notes = styled.div`
  margin-top: 30px;
  animation: ${slideInFromBottom} 2s ease-in;
`;

const NoteTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 10px;
  color: #388e3c;
`;

const NotePoint = styled.p`
  font-size: 16px;
  margin-bottom: 8px;
  color: #333;
`;

export default BroSplit;
