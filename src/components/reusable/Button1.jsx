import React from 'react'
import styled from 'styled-components'
export const Button = ({children}) => {
  return (
    <BTN>{children}</BTN>
  )
}

const BTN= styled.button`

// position: absolute;
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