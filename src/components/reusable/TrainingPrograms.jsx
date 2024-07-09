// import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import styled from 'styled-components';

// const TrainingPrograms = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { username } = location.state || { username: 'Guest' };

//   const handleTrainingProgramClick = (program) => {
//     alert(`Selected training program: ${program}`);
//     if (program === 'ppl') {
//       navigate('/ppl', { state: { username } });
//     } else if (program === 'bro-split') {
//       navigate('/bro-split', { state: { username } });
//     }
//   };

//   return (
//     <Container>
//       <Title>Select Training Program</Title>
//       <ProgramList>
//         <li onClick={() => handleTrainingProgramClick('ppl')}>Push Pull Legs (PPL)</li>
//         <li onClick={() => handleTrainingProgramClick('bro-split')}>Bro Split</li>
//       </ProgramList>
//     </Container>
//   );
// };

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
//   background-color: #f8f8f8;
// `;

// const Title = styled.h1`
//   margin-bottom: 20px;
// `;

// const ProgramList = styled.ul`
//   list-style-type: none;
//   padding: 0;
//   margin-bottom: 20px;

//   li {
//     font-size: 16px;
//     margin: 5px 0;
//     cursor: pointer;
//     text-decoration: underline;
//     color: blue;
//   }
// `;

// export default TrainingPrograms;

import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

// Import images
import pplImage from '../../assets/img_6.jpg';
import broSplitImage from '../../assets/img_2.jpg';

const TrainingPrograms = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { username } = location.state || { username: 'Guest' };

  const handleTrainingProgramClick = (program) => {
    alert(`Selected training program: ${program}`);
    if (program === 'ppl') {
      navigate('/ppl', { state: { username } });
    } else if (program === 'bro-split') {
      navigate('/bro-split', { state: { username } });
    }
  };

  return (
    <Container>
      <Title>Select Training Program</Title>
      <ProgramList>
        <ProgramCard onClick={() => handleTrainingProgramClick('ppl')}>
          <CardImage src={pplImage} alt="Push Pull Legs (PPL)" />
          <CardTitle>Push Pull Legs (PPL)</CardTitle>
        </ProgramCard>
        <ProgramCard onClick={() => handleTrainingProgramClick('bro-split')}>
          <CardImage src={broSplitImage} alt="Bro Split" />
          <CardTitle>Bro Split</CardTitle>
        </ProgramCard>
      </ProgramList>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f8f8;
`;

const Title = styled.h1`
  margin-bottom: 20px;
`;

const ProgramList = styled.div`
  display: flex;
  gap: 20px;
`;

const slideInFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-100%);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const ProgramCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border: 2px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  animation: ${slideInFromLeft} 1s ease;

  &:hover {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`;

const CardImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 5px;
  margin-bottom: 10px;
`;

const CardTitle = styled.h2`
  font-size: 18px;
  text-align: center;
`;

export default TrainingPrograms;
