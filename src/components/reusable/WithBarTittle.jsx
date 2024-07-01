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

const Box =styled.div`
display:flex;
flex-direction: row;
align-items: center;
margin-left:-554px;
`

const Line=styled.div`
margin-left: 565px;
width:70px;
height:2px;
background:red;`
const Title= styled.p`

// font-size:60px;
color:red;
text-transform:uppercase;`

export default WithBarTittle