
// import React from 'react';
// import { useLocation, Link, useNavigate } from 'react-router-dom';
// import styled, { keyframes } from 'styled-components';
// import WorkoutPlanImage from '../../assets/Workout_Plan.jpeg';
// import MealImage from '../../assets/Meal_Image.jpeg';
// import ExerciseDetailsImage from '../../assets/Exercise_Details.jpeg';

// const SubscriptionBenefits = () => {
//   const location = useLocation();
//   const { plan } = location.state || { plan: 'No plan selected' };
//   const navigate = useNavigate();

//   const handleLogout = () => {
//     // Perform any necessary logout logic here
//     navigate('/');
//   };

//   return (
//     <Container>
//       <Title>Subscription Benefits</Title>
//       <CurrentPlan>Current plan: {plan}</CurrentPlan>
//       <BenefitsList>
//         <BenefitCard  to="/training-programs">
//           <CardImage src={WorkoutPlanImage} alt="Training Programs" />
//           <CardTitle>Training Programs</CardTitle>
//         </BenefitCard>
//         <BenefitCard to="/meal-charts">
//           <CardImage src={MealImage} alt="Meal Charts" />
//           <CardTitle>Meal Charts</CardTitle>
//         </BenefitCard>
//         <BenefitCard to="/exercise-details">
//           <CardImage src={ExerciseDetailsImage} alt="Exercise Details" />
//           <CardTitle>Exercise Details</CardTitle>
//         </BenefitCard>
//       </BenefitsList>
//       <Message>Payment successful!</Message>
//       <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
//     </Container>
//   );
// };

// const slideInFromLeft = keyframes`
//   from {
//     opacity: 0;
//     transform: translateX(-100%);
//   }
//   to {
//     opacity: 1;
//     transform: translateX(0);
//   }
// `;

// const Container = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   height: 100vh;
//   background-color: #f8f8f8;
//   animation: ${slideInFromLeft} 1s ease;
// `;

// const Title = styled.h1`
//   margin-bottom: 20px;
// `;

// const CurrentPlan = styled.p`
//   font-size: 18px;
//   color: #333;
//   margin-bottom: 20px;
// `;

// const BenefitsList = styled.div`
//   display: flex;
//   gap: 20px;
//   margin-bottom: 20px;
// `;

// const BenefitCard = styled(Link)`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   background-color: white;
//   border: 2px solid #ccc;
//   border-radius: 10px;
//   padding: 20px;
//   text-decoration: none;
//   color: inherit;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   animation: ${slideInFromLeft} 1s ease;

//   &:hover {
//     box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
//   }
// `;

// const CardImage = styled.img`
//   width: 100px;
//   height: 100px;
//   object-fit: cover;
//   border-radius: 5px;
//   margin-bottom: 10px;
// `;

// const CardTitle = styled.h2`
//   font-size: 18px;
//   text-align: center;
// `;

// const Message = styled.p`
//   font-size: 18px;
//   color: green;
// `;

// const LogoutButton = styled.button`
//   padding: 10px 20px;
//   font-size: 16px;
//   color: white;
//   background-color: red;
//   border: none;
//   border-radius: 5px;
//   cursor: pointer;
//   &:hover {
//     background-color: #45a049;
//   }
// `;

// export default SubscriptionBenefits;


import React from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import styled, { keyframes, createGlobalStyle } from 'styled-components';
import WorkoutPlanImage from '../../assets/Workout_Plan.jpeg';
import MealImage from '../../assets/Meal_Image.jpeg';
import ExerciseDetailsImage from '../../assets/Exercise_Details.jpeg';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #747bff1c; /* Blue background */
    margin: 0; /* Remove default margin */
    padding: 0; /* Remove default padding */
    font-family: Arial, sans-serif; /* Default font family */
  }
`;

const SubscriptionBenefits = () => {
  const location = useLocation();
  const { plan } = location.state || { plan: 'No plan selected' };
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform any necessary logout logic here
    navigate('/');
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <Title>Subscription Benefits</Title>
        <CurrentPlan>Current plan: {plan}</CurrentPlan>
        <BenefitsList>
          <BenefitCard to="/training-programs">
            <CardImage src={WorkoutPlanImage} alt="Training Programs" />
            <CardTitle>Training Programs</CardTitle>
          </BenefitCard>
          <BenefitCard to="/meal-charts">
            <CardImage src={MealImage} alt="Meal Charts" />
            <CardTitle>Meal Charts</CardTitle>
          </BenefitCard>
          <BenefitCard to="/exercise-details">
            <CardImage src={ExerciseDetailsImage} alt="Exercise Details" />
            <CardTitle>Exercise Details</CardTitle>
          </BenefitCard>
        </BenefitsList>
        <Message>Payment successful!</Message>
        <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
      </Container>
    </>
  );
};

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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  animation: ${slideInFromLeft} 1s ease;
  background-color: #282c34; /* Blue background */
`;

const Title = styled.h1`
color:white;
  margin-bottom: 20px;
   font-family: 'Bona Nova SC';
`;

const CurrentPlan = styled.p`
  font-size: 18px;
  color: #333;
  margin-bottom: 20px;
`;

const BenefitsList = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
`;

const BenefitCard = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border: 2px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  text-decoration: none;
  color: inherit;
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

const Message = styled.p`
  font-size: 18px;
  color: green;
`;

const LogoutButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: white;
  background-color: red;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #45a049;
  }
`;

export default SubscriptionBenefits;
