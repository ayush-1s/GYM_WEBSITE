
import React, { useState } from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import 'animate.css/animate.min.css'; // Import animate.css

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #747bff1c; /* Blue background */
    margin: 0; /* Remove default margin */
    padding: 0; /* Remove default padding */
    font-family: Arial, sans-serif; /* Default font family */
  }
`;

const theme = {};

const SignUpLogin = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUpClick = () => {
    navigate('/user-info');
  };

  const handleLoginClick = () => {
    if (username === 'Ayush' && password === '12345') {
      navigate(`/account-created/Logged In`, { state: { username, login: true } });
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <CustomHeader>Fill the form</CustomHeader>
      <CSSTransition in={true} appear={true} timeout={2000} classNames="slide">
        <Container>
          <Form className="animate__animated animate__zoomInDown">
            <Title>Sign Up / Login</Title>
            <Input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button onClick={handleSignUpClick}>Sign Up</Button>
            <Button onClick={handleLoginClick}>Login</Button>
          </Form>
        </Container>
      </CSSTransition>
    </ThemeProvider>
  );
};

const CustomHeader = styled.h1`
  font-family: 'Bona Nova SC'; /* Custom font style */
  text-align: center;
  margin-top: 20px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #282c34;

  &.slide-appear {
    opacity: 0;
    transform: translateX(-100%);
  }
  &.slide-appear-active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 2s, transform 2s;
  }
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

const Title = styled.h1`
  margin-bottom: 20px;
  color: #333;
  font-family: 'Bona Nova SC';
`;

const Input = styled.input`
  margin: 10px 0;
  padding: 10px;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
  margin: 10px 0;
  padding: 10px;
  width: 100%;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export default SignUpLogin;
