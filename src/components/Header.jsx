import React from 'react';
import styled from 'styled-components';
import H1 from './reusable/H1';
import { Link } from 'react-router-dom';
import Button from './reusable/Button';
import { Logo } from './reusable/Logo';

// const menusData = [
//   {
//     id: 1,
//     name: "Home",
//   },
//   {
//     id: 2,
//     name: "About",
//   },
//   {
//     id: 3,
//     name: "Services",
//   },
//   {
//     id: 4,
//     name: "Schedule",
//   },
//   {
//     id: 5,
//     name: "Contact",
//   }
// ];


const menusData = [
  {
    id: 1,
    name: "Home",
    path: "/",

  },
  {
    id: 2,
    name: "About",
    path: "/about",

  },
  {
    id: 3,
    name: "Services",
    path: "/services",
  
  },
  {
    id: 4,
    name: "Schedule",
    path: "/schedule",

  },
  {
    id: 5,
    name: "Contact",
    path: "/contact",

  }
];



export const Header = () => {
  return (
    <Box>
      <Left>
          <Logo/>
      </Left>
      <Right>
        {menusData.map((menu) => {
          return (
            <Menu key={menu.id}   to={menu.path}  >{menu.name}</Menu>
          );
        })}

      
       
      </Right>
    </Box>
  );
}

const Box = styled.div`
 
    
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 5px 30px;
  top: 5px;
  left: 0;
`;


const H2= styled.div`
margin-top:-346px;
width:459px;
font-size:68px;
color:white;
text-transform:uppercase;
margin-left:-75px;`

const Left = styled.div`
flex-direction:row;
align-items:center;
justify-content:center;
`;

const Right = styled.div`


align-items: center;
justify-content: flex-end;
margin-top:-605px;
display:flex;
  flex-direction:row;
    align-items: center;
  
  justify-content:center;
  margin-right:15px;

`;


const Menu = styled(Link)`


  margin-left: 20px;
  font-size:1px;
  background: none;
  border: none;
  color: white;
  font-size: 16px;
  cursor: pointer;
  text-transform:capitalize;
  &:hover {
    text-decoration: underline;
  }
`;



export default Header;







