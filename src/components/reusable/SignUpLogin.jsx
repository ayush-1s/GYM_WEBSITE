import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const SignUpLogin = () => {
  const navigate = useNavigate();

  const handleSignUpClick = () => {
    navigate('/user-info');
  };

  return (
    <Container>
      <Form>
        <Title>Sign Up / Login</Title>
        <Input type="text" placeholder="Username" />
        <Input type="password" placeholder="Password" />
        <Button onClick={handleSignUpClick}>Sign Up</Button>
        <Button>Login</Button>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f0f0;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  margin-bottom: 20px;
`;

const Input = styled.input`
  margin: 10px 0;
  padding: 10px;
  width: 100%;
`;

const Button = styled.button`
  margin: 10px 0;
  padding: 10px;
  width: 100%;
  background-color: red;
  color: white;
  border: none;
  cursor: pointer;
`;

export default SignUpLogin;
