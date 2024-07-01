import React from 'react'
import styled from 'styled-components'
export const WithBarTittle = ({children}) => {
  return (
    <Box>
       <Line />
        <Title>{children}</Title>
    </Box>
  )
}


const Box = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`

const Line = styled.div`
margin-top: 71px;
  width: 70px;
  height: 2px;
  background: red;
  margin-right: 10px; /* Space between the line and the title */
`

const Title= styled.p`

// font-size:60px;
margin-top: 86px;


color:red;
text-transform:uppercase;`

export default WithBarTittle