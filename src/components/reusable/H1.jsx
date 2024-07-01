import React from 'react'
import styled from "styled-components"
export const H1 = ({children}) => {
  return (
  <Title>{children}</Title>

  )
}

const Title= styled.h1`
animation:bounceInLeft;
animation-duration:2s;
width:459px;
font-size:68px;
line-height:1.1;
color:white;
text-transform:uppercase;
margin: 24px 0px;
margin-left:-475px;`

export default H1
