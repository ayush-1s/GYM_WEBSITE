import React from 'react'
import styled from 'styled-components';
import bg from "../assets/img_3.jpg";
import WT from "./reusable/WT"
import Header from './Header';
import Button1 from './reusable/Button1';
import { ServicesData } from '../data/LocalData';
export const Services = () => {
  return (
    <Containerr>
    <InnerContainer>
    <Box>
    
    <WT title="Our Services With You" >
  Our Services With You
</WT>
<Headerr>
    <H1>
        SAFE BODY BUILDING PROPER SOLUTIONS THAT SAVES OUR VALUABLE TIME!
    </H1>
    <Button1>More Services</Button1>

    </Headerr>

   <Cards>
   {ServicesData?.map((_,index)=>{
      return (
        <React.Fragment key={index}>
          <Card item={_}/>
          
        </React.Fragment>
      );
    })}
   </Cards>
    </Box>

    </InnerContainer>

    </Containerr>
  )
}



export function Card({item}){
    return (
      <MyCard>
        <Icon>{item.icon}</Icon>
       <Title>{item.title}</Title>
       <Description>{item.description}</Description>
      </MyCard>
    )
}




const Cards=styled.div`
display:flex;
flex-direction:rows;
align-items:center;
justify-content:space-between;
`;
const H1= styled.h1`

width:459px;
font-size:43px;
line-height:1.1;
color:white;
text-transform:uppercase;
margin: 24px 0px;
margin-left:-100px;
padding-top: 23px;`


const Containerr = styled.div`
margin-top:150px;
  width: 120%;
  height: 100vh;
  background: red;
  display: flex;
  align-items: center;
//   justify-content: center; /* Center the text */
//   padding: 0 20px;
background-image:url(${bg});
// background-attachment:fixed;
background-repeat:no-repeat;
background-size:cover;
background-position:center;
`;

const InnerContainer=styled.div`
background-color:rgba(0,0,0,0.7);
height:100%;
width:100%;
display:flex;
flex-direction:column;
align-items:center;
// justify-content:

`;

const  Box=styled.div`
width:75%;
height:100%;


`;

const Headerr=styled.div`
display:flex;
flex-direction:rows;
align-items:center;
justify-content:space-between;
`;


const MyCard=styled.div`
width:25%;
height:250px;
border: 1px solid #ccc;
background-color:white;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
padding:20px;
color:#212025;
`;

const Title=styled.h3`
font-size:30px;
text-align:center;
margin:30px 0px;
font-weight:400;
`;
const Icon=styled.span`
font-size:30px;`;
const Description=styled.p`
font-size:24px;
text-align:center;
font-weight:400;`;


export default Services



