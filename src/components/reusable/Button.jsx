import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom';
export const Button = ({children}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (children === 'Became a Member') {
      navigate('/signup-login');
    }
  };
  return (
    <BTN onClick={handleClick}>{children}</BTN>
  )
}

const BTN= styled.button`


position: absolute;
top: 20px;
right: 20px;
outline:none;
border:none;
text-transform:uppercase;
padding:20px;
background-color:red;
color:white;
cursor:pointer;
margin-left:-1509px;
`
export default Button