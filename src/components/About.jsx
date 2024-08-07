
import React from 'react';
import styled from 'styled-components';
import bg from '../assets/img_8.jpg';
import WithBarTittle from "./reusable/WithBarTittle"
import H1 from "./reusable/H1"
import H3 from './reusable/H3';
export const About = () => {
  return (
    <Container>
      <Left>
        <Image src={bg} />
      </Left>
      <Right>
        <WithBarTittle title="About Our Gym" >About Our Gym</WithBarTittle>
        
        <H2>SAFE BODY BUILDING PROPER SOLUTIONS THAT SAVES OUR VALUABLE TIME!</H2>
        <H33>GYM STRATEGIES is a premier fitness center dedicated to providing top-notch workout programs and personalized coaching to help members achieve their fitness goals. Our state-of-the-art facilities and expert trainers ensure a comprehensive and effective fitness experience.</H33>
           
       


      </Right>
    </Container>
  );
};

const H33=styled.h4`
width: 459px;
font-family:Raleway;
font-size:19px;
line-height:1.1;
font-weight:400;
color:#000000c4;
`

const H2= styled.h1`
align-self: flex-start;
margin-left: auto;
margin-left: -18px;
width:459px;
font-size:40px;
line-height:1.1;
color:black;
text-transform:uppercase;
margin: 24px 0px;
// margin-left:auto;`
const Container = styled.div`
  width: 100%;
  height: 80vh;
  background: white;
  display: flex;
  align-items: center;
  padding: 0 20px;
`;

const Left = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;  /* Corrected property name */
`;

const Image = styled.img`
  max-width: 70%;  /* Use max-width to ensure it scales properly */
  max-height: 100%;  /* Use max-height to ensure it scales properly */
  object-fit: contain;  /* Ensures the image is contained within the bounds */
  padding-top: 190px;
`;

const Right = styled.div`
  width: 50%;
  height: 100%;
  margin-top: 432px;
 
`;

