
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const SubscriptionOptions = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { username } = location.state || { username: 'Guest' }; // Default to 'Guest' if username is not provided

  const plans = [
    { name: '1 Month Subscription', price: '₹1,500' },
    { name: '4 Months Subscription', price: '₹5,000' },
    { name: 'Annual Subscription', price: '₹15,000' },
  ];

  const handleCardClick = (plan) => {
    navigate(`/account-created/${plan.name}`, { state: { username } });
  };

  return (
    <Container>
      {plans.map((plan, index) => (
        <Card key={index} onClick={() => handleCardClick(plan)} index={index}>
          <Title>{plan.name}</Title>
          <Price>{plan.price}</Price>
        </Card>
      ))}
    </Container>
  );
};

const slideIn = keyframes`
  from {
    transform: translateY(-100px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: row;  // Change to row for side-by-side layout
`;

const Card = styled.div`
  width: 300px;
  padding: 20px;
  margin: 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
  border: 2px solid ${({ index }) => (index === 0 ? '#ff6347' : index === 1 ? '#3cb371' : '#1e90ff')};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s;
  animation: ${slideIn} 0.5s ease-in-out ${({ index }) => index * 0.5}s both;

  &:hover {
    transform: scale(1.05);
  }
`;

const Title = styled.h2`
  margin-bottom: 10px;
`;

const Price = styled.p`
  font-size: 18px;
`;

export default SubscriptionOptions;
