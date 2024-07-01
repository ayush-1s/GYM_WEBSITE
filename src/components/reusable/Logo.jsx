import React from 'react'
import styled from 'styled-components'
import { GiGymBag } from 'react-icons/gi'
export const Logo = () => {
  return (
    <Boxx>
        <Immg>
        <GiGymBag/>
        </Immg>
         <Titlle>FITNESS</Titlle>

    </Boxx>
  )
}


const Boxx=styled.div`
display:flex;
margin-top:-313px;
flex-direction:row;
align-items:center;
color:white;`;
const Immg=styled.span`
font-size:16px;

margin-right: 10px;
`;

const Titlle= styled.div`
font-size:16px;
`;


export default Logo;

// import React from 'react';
// import styled from 'styled-components';
// import { GiGymBag } from 'react-icons/gi';

// export const Logo = () => {
//   return (
//     <Box>
//       <Img>
//         <GiGymBag />
//       </Img>
//       <Title>FITNESS</Title>
//     </Box>
//   );
// };

// const Box = styled.div`
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   color: white;
// `;

// const Img = styled.span`
//   font-size: 32px;
//   margin-right: 10px;
// `;

// const Title = styled.div`
//   font-size: 24px;
//   text-transform: uppercase;
// `;

// export default Logo;
