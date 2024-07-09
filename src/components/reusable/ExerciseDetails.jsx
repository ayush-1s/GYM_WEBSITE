import React from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframes for background color change
const changeBackgroundColor = keyframes`
  0% { background-color: #f8f8f8; }
  25% { background-color: #e0f7fa; }
  50% { background-color: #ffecb3; }
  75% { background-color: #ffe0b2; }
  100% { background-color: #f8f8f8; }
`;

// Keyframes for fade-in effect
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const ExerciseDetail = () => {
  return (
    <Container>
      <Section>
        <SectionTitle>Chest Exercises</SectionTitle>
        <ExerciseList>
          <ExerciseItem>
            <ExerciseName>Bench Press (Barbell or Dumbbell)</ExerciseName>
            <ExerciseDescription>
              Targets: Pectoralis major (chest), triceps, shoulders.
              <br />
              Intensity: High.
            </ExerciseDescription>
          </ExerciseItem>
          <ExerciseItem>
            <ExerciseName>Dumbbell Flyes</ExerciseName>
            <ExerciseDescription>
              Targets: Pectoralis major (chest).
              <br />
              Intensity: Moderate to high.
            </ExerciseDescription>
          </ExerciseItem>
          <ExerciseItem>
            <ExerciseName>Chest Press Machine</ExerciseName>
            <ExerciseDescription>
              Targets: Pectoralis major (chest), triceps, shoulders.
              <br />
              Intensity: Moderate.
            </ExerciseDescription>
          </ExerciseItem>
          <ExerciseItem>
            <ExerciseName>Push-Ups</ExerciseName>
            <ExerciseDescription>
              Targets: Pectoralis major (chest), triceps, shoulders.
              <br />
              Intensity: Moderate.
            </ExerciseDescription>
          </ExerciseItem>
        </ExerciseList>
      </Section>

      <Section>
        <SectionTitle>Back Exercises</SectionTitle>
        <ExerciseList>
          <ExerciseItem>
            <ExerciseName>Pull-Ups or Lat Pull-Downs</ExerciseName>
            <ExerciseDescription>
              Targets: Latissimus dorsi (lats), biceps, middle back.
              <br />
              Intensity: High.
            </ExerciseDescription>
          </ExerciseItem>
          <ExerciseItem>
            <ExerciseName>Bent-Over Rows (Barbell or Dumbbell)</ExerciseName>
            <ExerciseDescription>
              Targets: Latissimus dorsi (lats), rhomboids, middle back.
              <br />
              Intensity: Moderate to high.
            </ExerciseDescription>
          </ExerciseItem>
          <ExerciseItem>
            <ExerciseName>Deadlifts (Conventional or Romanian)</ExerciseName>
            <ExerciseDescription>
              Targets: Lower back, glutes, hamstrings.
              <br />
              Intensity: High.
            </ExerciseDescription>
          </ExerciseItem>
          <ExerciseItem>
            <ExerciseName>Seated Cable Rows</ExerciseName>
            <ExerciseDescription>
              Targets: Latissimus dorsi (lats), middle back, biceps.
              <br />
              Intensity: Moderate.
            </ExerciseDescription>
          </ExerciseItem>
        </ExerciseList>
      </Section>

      {/* Repeat similar sections for Shoulder, Arm, Leg, Core, and Additional Exercises */}

    </Container>
  );
};

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  animation: ${changeBackgroundColor} 8s infinite;
  background-color: #f8f8f8;
`;

const Section = styled.div`
  margin-top: 30px;
  animation: ${fadeIn} 1s ease-in-out;
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
  color: #3498db;
`;

const ExerciseList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ExerciseItem = styled.li`
  margin-bottom: 20px;
`;

const ExerciseName = styled.h3`
  font-size: 20px;
  color: #e74c3c;
`;

const ExerciseDescription = styled.p`
  font-size: 16px;
  color: #34495e;
`;

export default ExerciseDetail;
