// AccountCreated.jsx
import React from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const AccountCreated = () => {
  const { plan } = useParams();
  const location = useLocation();
  const { username, login } = location.state || { username: 'Guest', login: false };
  const navigate = useNavigate();

  const handleProceed = () => {
    navigate('/subscription-benefits', { state: { username, plan } });
  };

  return (
    <Container>
      <Username>Welcome, {username}!</Username>
      {login ? (
        <Message style={{ color: 'green' }}>Successfully Logged In!</Message>
      ) : (
        <Message>Your account has been created!</Message>
      )}
      <SelectedPlan>You have selected the {plan}.</SelectedPlan>
      <Button onClick={handleProceed}>Proceed to Subscription Benefits</Button>
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

const Username = styled.h1`
  margin-bottom: 20px;
`;

const Message = styled.h1`
  margin-bottom: 20px;
`;

const SelectedPlan = styled.p`
  font-size: 18px;
  color: #333;
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #45a049;
  }
`;

export default AccountCreated;
