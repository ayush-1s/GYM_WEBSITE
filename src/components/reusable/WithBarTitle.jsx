// import React from 'react'
// import styled from 'styled-components'
// export const WithBarTitle = ({children,margin_left}) => {
//   return (
//     <Box>
//        <Line />
//         <Title  margin-left={margin_left}>{children}</Title>
//     </Box>
//   )
// }

// const Box =styled.div`
// display:flex;
// flex-direction: row;
// align-items: center;
// // margin-left:-569px;
// margin-left:${(props)=>props.margin_left||"-569px" };
// `

// const Line=styled.div`
// width:70px;
// height:2px;
// background:red;`
// const Title= styled.p`
// // font-size:60px;
// color:red;
// text-transform:uppercase;`

// export default WithBarTitle


import React from 'react'
import styled from 'styled-components'

export const WithBarTitle = ({children}) => {
  return (
    <Box>
       <Line />
        <Title >{children}</Title>
    </Box>
  )
}

const Box = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left:-456px;
  
`

const Line = styled.div`
  width: 70px;
  height: 2px;
  background: red;
`

const Title = styled.p`
  color: red;
  text-transform: uppercase;

`

export default WithBarTitle
