import React from 'react'
import styled from 'styled-components'
import bg from "../assets/img_1.jpg" 
import H1 from './reusable/H1'
import Button from './reusable/Button'
import WithBarTitle from './reusable/WithBarTitle'
import { FiPlay } from 'react-icons/fi'
import { Header } from './Header'
import { useNavigate } from 'react-router-dom';

export const Banner = () => {
  const navigate = useNavigate();

  const handlePlayClick = () => {
    navigate('/video');
  };
  return (
   <Main>
    <Header />
     <Container>
    
       <RighttBox>
          <WithBarTitle>WITH AYUSH SHARMA</WithBarTitle>
        
            <H1>Build Perfect Body Shape for Good and Healthy Life</H1>
            <Button>Became a Member</Button>
        </RighttBox>
        <LeftBox>
         <Circle>
         <CircleButton onClick={handlePlayClick}>
            <FiPlay />
          </CircleButton>
         </Circle>
        </LeftBox>
    </Container>
   </Main>
  )
}



const Container = styled.div`
  width: 100%; /* Use viewport width */
  height: 140%; /* Use viewport height */
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:center;
  color:blue;
`;


const Main=styled.div`
//   width: 100vw;
//   height: 100vh;
//   padding-left: 0px;
//   background-image: url(${bg});
//   background-attachment: fixed;
//   background-repeat: no-repeat;
//   background-size: cover;
//   display: flex;
  
//   align-items: center;
//   justify-content: flex-start;
position: relative;
width: 100vw; /* Use viewport width */
height: 100vh; /* Use viewport height */
padding-left: 0px; /* Changed from left-padding to padding-left */
background-image: url(${bg} );
background-attachment: fixed;
background-repeat: no-repeat;
background-size: cover;
display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:center;
  margin-right:0px;`

const LeftBox=styled.div`
width:70%;
display:flex;
flex-direction:column;
align-items:flex-end;`

const CircleButton=styled.button`
outline:none;
background-color:red;
color:white;
width:70px;
height:60px;
border-radius:50%;
// margin-right:100px
cursor:pointer;
`

const Circle=styled.div`
border:2px solid red;
width:70px;
height:60px;
border-radius:50%;
margin-right:120px;
padding:2px;
animation:zoomIn;
animation-duration:2s;`
const RighttBox=styled.div`

width:60%;
padding: 0px 100px;
`
export default Banner


