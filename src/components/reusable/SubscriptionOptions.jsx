// SubscriptionOptions.jsx
import React from 'react';
import styled from 'styled-components';

const SubscriptionOptions = () => {
  return (
    <Container>
      <Card>
        <Title>1 Month Subscription</Title>
        <Price>$10</Price>
      </Card>
      <Card>
        <Title>3 Month Subscription</Title>
        <Price>$25</Price>
      </Card>
      <Card>
        <Title>Annual Subscription</Title>
        <Price>$80</Price>
      </Card>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Card = styled.div`
  width: 300px;
  padding: 20px;
  margin: 20px;
  background-color: #f0f0f0;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  margin-bottom: 10px;
`;

const Price = styled.p`
  font-size: 18px;
`;

export default SubscriptionOptions;

 