import React from 'react'
import styled from "styled-components"
export const H3= ({children}) => {
  return (
  <Title>{children}</Title>

  )
}

const Title= styled.h4`
width: 459px;

font-size:15px;
line-height:1.1;
font-weight:400;
color:black;
`

export default H3
