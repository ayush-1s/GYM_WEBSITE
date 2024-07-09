// import React from 'react';
// import styled from 'styled-components';

// const PPL = () => {
//   return (
//     <Container>
//       <Title>Push-Pull-Legs (PPL) Workout Split</Title>

//       <SectionTitle>Push Day</SectionTitle>
//       <SectionDescription>
//         Focuses on exercises that involve pushing movements primarily targeting the chest, shoulders, and triceps.
//       </SectionDescription>
//       <ExerciseList>
//         <li>Bench press (flat, incline, or decline)</li>
//         <li>Shoulder press (barbell or dumbbell)</li>
//         <li>Dips</li>
//         <li>Tricep extensions (cable or dumbbell)</li>
//         <li>Chest flyes (dumbbell or machine)</li>
//         <li>Lateral raises</li>
//       </ExerciseList>

//       <SectionTitle>Pull Day</SectionTitle>
//       <SectionDescription>
//         Focuses on exercises that involve pulling movements primarily targeting the back and biceps.
//       </SectionDescription>
//       <ExerciseList>
//         <li>Deadlifts (conventional or sumo)</li>
//         <li>Pull-ups or lat pull-downs</li>
//         <li>Rows (barbell, dumbbell, or cable)</li>
//         <li>Face pulls</li>
//         <li>Bicep curls (barbell, dumbbell, or cable)</li>
//         <li>Hammer curls</li>
//       </ExerciseList>

//       <SectionTitle>Leg Day</SectionTitle>
//       <SectionDescription>
//         Focuses on exercises that target the lower body, including quadriceps, hamstrings, glutes, and calves.
//       </SectionDescription>
//       <ExerciseList>
//         <li>Squats (back squat, front squat, goblet squat)</li>
//         <li>Lunges (walking lunges, reverse lunges)</li>
//         <li>Leg press</li>
//         <li>Romanian deadlifts</li>
//         <li>Leg curls (lying or seated)</li>
//         <li>Calf raises (standing or seated)</li>
//       </ExerciseList>

//       <SectionTitle>Sample Push-Pull-Legs Routine</SectionTitle>
//       <RoutineDescription>
//         Below is an example of a structured workout routine for each day of the PPL split.
//       </RoutineDescription>

//       <RoutineSectionTitle>Push Day:</RoutineSectionTitle>
//       <RoutineDetails>
//         <RoutineStep>Warm-up: 5-10 minutes of light cardio and dynamic stretches.</RoutineStep>
//         <RoutineStep>Bench Press: 4 sets x 8-12 reps</RoutineStep>
//         <RoutineStep>Shoulder Press (Barbell or Dumbbell): 3 sets x 8-12 reps</RoutineStep>
//         <RoutineStep>Tricep Dips: 3 sets x 10-15 reps</RoutineStep>
//         <RoutineStep>Lateral Raises: 3 sets x 12-15 reps</RoutineStep>
//         <RoutineStep>Tricep Rope Pushdowns: 3 sets x 12-15 reps</RoutineStep>
//       </RoutineDetails>

//       <RoutineSectionTitle>Pull Day:</RoutineSectionTitle>
//       <RoutineDetails>
//         <RoutineStep>Warm-up: 5-10 minutes of light cardio and dynamic stretches.</RoutineStep>
//         <RoutineStep>Deadlifts: 4 sets x 6-10 reps</RoutineStep>
//         <RoutineStep>Pull-ups or Lat Pull-downs: 3 sets x 8-12 reps</RoutineStep>
//         <RoutineStep>Bent-Over Rows: 3 sets x 8-12 reps</RoutineStep>
//         <RoutineStep>Face Pulls: 3 sets x 12-15 reps</RoutineStep>
//         <RoutineStep>Bicep Curls (Barbell or Dumbbell): 3 sets x 10-15 reps</RoutineStep>
//       </RoutineDetails>

//       <RoutineSectionTitle>Leg Day:</RoutineSectionTitle>
//       <RoutineDetails>
//         <RoutineStep>Warm-up: 5-10 minutes of light cardio and dynamic stretches.</RoutineStep>
//         <RoutineStep>Squats (Back or Front): 4 sets x 8-12 reps</RoutineStep>
//         <RoutineStep>Romanian Deadlifts: 3 sets x 8-12 reps</RoutineStep>
//         <RoutineStep>Leg Press: 3 sets x 10-15 reps</RoutineStep>
//         <RoutineStep>Leg Curls (Lying or Seated): 3 sets x 10-15 reps</RoutineStep>
//         <RoutineStep>Calf Raises (Standing or Seated): 4 sets x 12-15 reps</RoutineStep>
//       </RoutineDetails>

//       <Notes>
//         <NoteTitle>Notes:</NoteTitle>
//         <NotePoint>
//           Frequency: Aim to train each muscle group 1-2 times per week depending on your recovery ability and goals.
//         </NotePoint>
//         <NotePoint>
//           Progression: Increase weights gradually as you get stronger to continue challenging your muscles.
//         </NotePoint>
//         <NotePoint>Rest: Take 1-2 days of rest or light activity between each push-pull-legs cycle to allow for recovery.</NotePoint>
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

// const SectionTitle = styled.h2`
//   font-size: 24px;
//   margin-top: 30px;
// `;

// const SectionDescription = styled.p`
//   font-size: 18px;
//   color: #555;
// `;

// const ExerciseList = styled.ul`
//   list-style-type: disc;
//   margin-left: 20px;
//   font-size: 16px;
// `;

// const RoutineDescription = styled.p`
//   font-size: 18px;
//   margin-top: 20px;
// `;

// const RoutineSectionTitle = styled.h3`
//   font-size: 20px;
//   margin-top: 20px;
// `;

// const RoutineDetails = styled.div`
//   margin-left: 20px;
// `;

// const RoutineStep = styled.p`
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

// export default PPL;


import React from 'react';
import styled, { keyframes } from 'styled-components';

const PPL = () => {
  return (
    <Container>
      <Title>Push-Pull-Legs (PPL) Workout Split</Title>

      <SectionTitle>Push Day</SectionTitle>
      <SectionDescription>
        Focuses on exercises that involve pushing movements primarily targeting the chest, shoulders, and triceps.
      </SectionDescription>
      <ExerciseList>
        <li>Bench press (flat, incline, or decline)</li>
        <li>Shoulder press (barbell or dumbbell)</li>
        <li>Dips</li>
        <li>Tricep extensions (cable or dumbbell)</li>
        <li>Chest flyes (dumbbell or machine)</li>
        <li>Lateral raises</li>
      </ExerciseList>

      <SectionTitle>Pull Day</SectionTitle>
      <SectionDescription>
        Focuses on exercises that involve pulling movements primarily targeting the back and biceps.
      </SectionDescription>
      <ExerciseList>
        <li>Deadlifts (conventional or sumo)</li>
        <li>Pull-ups or lat pull-downs</li>
        <li>Rows (barbell, dumbbell, or cable)</li>
        <li>Face pulls</li>
        <li>Bicep curls (barbell, dumbbell, or cable)</li>
        <li>Hammer curls</li>
      </ExerciseList>

      <SectionTitle>Leg Day</SectionTitle>
      <SectionDescription>
        Focuses on exercises that target the lower body, including quadriceps, hamstrings, glutes, and calves.
      </SectionDescription>
      <ExerciseList>
        <li>Squats (back squat, front squat, goblet squat)</li>
        <li>Lunges (walking lunges, reverse lunges)</li>
        <li>Leg press</li>
        <li>Romanian deadlifts</li>
        <li>Leg curls (lying or seated)</li>
        <li>Calf raises (standing or seated)</li>
      </ExerciseList>

      <SectionTitle>Sample Push-Pull-Legs Routine</SectionTitle>
      <RoutineDescription>
        Below is an example of a structured workout routine for each day of the PPL split.
      </RoutineDescription>

      <RoutineSectionTitle>Push Day:</RoutineSectionTitle>
      <RoutineDetails>
        <RoutineStep>Warm-up: 5-10 minutes of light cardio and dynamic stretches.</RoutineStep>
        <RoutineStep>Bench Press: 4 sets x 8-12 reps</RoutineStep>
        <RoutineStep>Shoulder Press (Barbell or Dumbbell): 3 sets x 8-12 reps</RoutineStep>
        <RoutineStep>Tricep Dips: 3 sets x 10-15 reps</RoutineStep>
        <RoutineStep>Lateral Raises: 3 sets x 12-15 reps</RoutineStep>
        <RoutineStep>Tricep Rope Pushdowns: 3 sets x 12-15 reps</RoutineStep>
      </RoutineDetails>

      <RoutineSectionTitle>Pull Day:</RoutineSectionTitle>
      <RoutineDetails>
        <RoutineStep>Warm-up: 5-10 minutes of light cardio and dynamic stretches.</RoutineStep>
        <RoutineStep>Deadlifts: 4 sets x 6-10 reps</RoutineStep>
        <RoutineStep>Pull-ups or Lat Pull-downs: 3 sets x 8-12 reps</RoutineStep>
        <RoutineStep>Bent-Over Rows: 3 sets x 8-12 reps</RoutineStep>
        <RoutineStep>Face Pulls: 3 sets x 12-15 reps</RoutineStep>
        <RoutineStep>Bicep Curls (Barbell or Dumbbell): 3 sets x 10-15 reps</RoutineStep>
      </RoutineDetails>

      <RoutineSectionTitle>Leg Day:</RoutineSectionTitle>
      <RoutineDetails>
        <RoutineStep>Warm-up: 5-10 minutes of light cardio and dynamic stretches.</RoutineStep>
        <RoutineStep>Squats (Back or Front): 4 sets x 8-12 reps</RoutineStep>
        <RoutineStep>Romanian Deadlifts: 3 sets x 8-12 reps</RoutineStep>
        <RoutineStep>Leg Press: 3 sets x 10-15 reps</RoutineStep>
        <RoutineStep>Leg Curls (Lying or Seated): 3 sets x 10-15 reps</RoutineStep>
        <RoutineStep>Calf Raises (Standing or Seated): 4 sets x 12-15 reps</RoutineStep>
      </RoutineDetails>

      <Notes>
        <NoteTitle>Notes:</NoteTitle>
        <NotePoint>
          Frequency: Aim to train each muscle group 1-2 times per week depending on your recovery ability and goals.
        </NotePoint>
        <NotePoint>
          Progression: Increase weights gradually as you get stronger to continue challenging your muscles.
        </NotePoint>
        <NotePoint>Rest: Take 1-2 days of rest or light activity between each push-pull-legs cycle to allow for recovery.</NotePoint>
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

// Keyframes for fade-in animation
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
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

const SectionTitle = styled.h2`
  font-size: 24px;
  margin-top: 30px;
  color: #1a73e8;
`;

const SectionDescription = styled.p`
  font-size: 18px;
  color: #555;
`;

const ExerciseList = styled.ul`
  list-style-type: disc;
  margin-left: 20px;
  font-size: 16px;
  color: #333;
`;

const RoutineDescription = styled.p`
  font-size: 18px;
  margin-top: 20px;
  color: #555;
`;

const RoutineSectionTitle = styled.h3`
  font-size: 20px;
  margin-top: 20px;
  color: #d32f2f;
`;

const RoutineDetails = styled.div`
  margin-left: 20px;
`;

const RoutineStep = styled.p`
  font-size: 16px;
  color: #333;
`;

const Notes = styled.div`
  margin-top: 30px;
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

export default PPL;
