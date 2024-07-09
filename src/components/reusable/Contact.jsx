// import React from 'react';
// import styled from 'styled-components';

// const Container = styled.div`
//   text-align: center;
//   margin: 20px;
// `;

// const Title = styled.h3`
//   margin: 20px 0;
// `;

// const Address = styled.p`
//   font-family: Montserrat;
//   font-size: 18px;
//   font-weight: 400;
// `;

// const ContactLink = styled.a`
//   font-family: Montserrat;
//   font-size: 18px;
//   font-weight: 400;
//   outline: none;
// `;

// const SocialIcons = styled.div`
//   display: flex;
//   justify-content: center;
//   margin-top: 20px;

//   a {
//     margin: 0 10px;
//     text-decoration: none;
//   }

//   svg {
//     width: 24px;
//     height: 24px;
//   }
// `;

// const Contact = () => {
//   return (
//     <>
//       <Container>
//         <Title>GET IN TOUCH</Title>
//         <Title>
//           WE ARE ALWAYS READY TO HEAR FROM YOU<br />
//           OUR TEAM IS ALWAYS READY TO HEAR FROM YOU. WE MAKE IT A POINT TO RESPOND WITHIN 24 HOURS ON WEEKDAYS AND 48 HOURS ON WEEKENDS
//         </Title>
//         <Address>
//           <strong>Address</strong>: Dhantak Plaza, 203, 2nd Floor, Makwana Rd, Gamdevi, Marol, Andheri East, Mumbai, Maharashtra 400059<br />
//           <strong>Email</strong>: <ContactLink href="mailto:WeCare@GoldsGym.in">WeCare@GoldsGym.in</ContactLink> or <ContactLink href="mailto:customer.care@goldsgym.in">customer.care@goldsgym.in</ContactLink><br />
//           <strong>Phone Number</strong>: <ContactLink href="tel:+918976834832">+91 8976834832</ContactLink>
//         </Address>
//       </Container>
//       <SocialIcons>
//         <a href="https://www.facebook.com/GoldsGymIndia" target="_blank" rel="nofollow">
//           <svg viewBox="0 0 264 512">
//             <path d="M76.7 512V283H0v-91h76.7v-71.7C76.7 42.4 124.3 0 193.8 0c33.3 0 61.9 2.5 70.2 3.6V85h-48.2c-37.8 0-45.1 18-45.1 44.3V192H256l-11.7 91h-73.6v229"></path>
//           </svg>
//         </a>
//         <a href="https://twitter.com/GoldsGymIndia" target="_blank" rel="nofollow">
//           <svg viewBox="0 0 24 24">
//             <path d="M8 19c6.627 0 10.25-5.497 10.25-10.25v-.467A7.322 7.322 0 0 0 20 6.25a7.206 7.206 0 0 1-2.357.647 3.582 3.582 0 0 0 1.548-1.99 7.174 7.174 0 0 1-2.273.87A3.58 3.58 0 0 0 14 4.75a3.57 3.57 0 0 0-3.57 3.57c0 .281.031.557.092.82A10.159 10.159 0 0 1 2 5.022a3.558 3.558 0 0 0-.482 1.796c0 1.241.632 2.34 1.598 2.982a3.552 3.552 0 0 1-1.616-.447v.045c0 1.736 1.234 3.181 2.872 3.506a3.576 3.576 0 0 1-1.61.062c.454 1.416 1.776 2.447 3.343 2.473A7.194 7.194 0 0 1 2 17.245a10.196 10.196 0 0 0 5.5 1.614"></path>
//           </svg>
//         </a>
//         <a href="https://www.youtube.com/channel/UCCPNLx0irb9sbFdsdTCV6rg" target="_blank" rel="nofollow">
//           <svg viewBox="0 0 576 512">
//             <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
//           </svg>
//         </a>
//         <a href="https://www.instagram.com/goldsgymindia/" target="_blank" rel="nofollow">
//           <svg viewBox="0 0 448 512">
//             <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.6-9 132.1z"></path>
//           </svg>
//         </a>
//       </SocialIcons>
//     </>
//   );
// };

// export default Contact;


import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #747bff1c; /* Blue background */
    margin: 0; /* Remove default margin */
    padding: 0; /* Remove default padding */
    font-family: Arial, sans-serif; /* Default font family */
  }
`;

const theme = {};

const Container = styled.div`
  text-align: center;
  margin: 20px;
`;

const Title = styled.h3`
 font-family: 'Bona Nova SC';
 font-weight:10px;
  margin: 20px 0;
  color: black; /* Text color to contrast with blue background */
`;

const Address = styled.p`
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 400;
  color: black; /* Text color to contrast with blue background */
`;

const ContactLink = styled.a`
  font-family: Montserrat;
  font-size: 18px;
  font-weight: 400;
  color: black; /* Link color to contrast with blue background */
  outline: none;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  color:black;

  a {
    margin: 0 10px;
    text-decoration: none;
  }

  svg {
    width: 24px;
    height: 24px;
    fill: black; /* Icon color to contrast with blue background */
  }
`;

const Contact = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Title>GET IN TOUCH</Title>
        <Title>
          WE ARE ALWAYS READY TO HEAR FROM YOU<br />
          OUR TEAM IS ALWAYS READY TO HEAR FROM YOU. WE MAKE IT A POINT TO RESPOND WITHIN 24 HOURS ON WEEKDAYS AND 48 HOURS ON WEEKENDS
        </Title>
        <Address>
          <strong>Address</strong>: Ansal Plaza, 203, 2nd Floor, Pari Chowk,Omega-2,Greater Noida,Uttar Pradesh 201310<br />
          <strong>Email</strong>: <ContactLink href="mailto:WeCare@GoldsGym.in">AyushFitness@AFGym.in</ContactLink> or <ContactLink href="mailto:customer.care@goldsgym.in">customer.care@goldsgym.in</ContactLink><br />
          <strong>Phone Number</strong>: <ContactLink href="tel:+918976834832">+91 894567882</ContactLink>
        </Address>
      </Container>
      <SocialIcons>
        <a href="https://www.facebook.com/GoldsGymIndia" target="_blank" rel="nofollow">
          <svg viewBox="0 0 264 512">
            <path d="M76.7 512V283H0v-91h76.7v-71.7C76.7 42.4 124.3 0 193.8 0c33.3 0 61.9 2.5 70.2 3.6V85h-48.2c-37.8 0-45.1 18-45.1 44.3V192H256l-11.7 91h-73.6v229"></path>
          </svg>
        </a>
        <a href="https://twitter.com/GoldsGymIndia" target="_blank" rel="nofollow">
          <svg viewBox="0 0 24 24">
            <path d="M8 19c6.627 0 10.25-5.497 10.25-10.25v-.467A7.322 7.322 0 0 0 20 6.25a7.206 7.206 0 0 1-2.357.647 3.582 3.582 0 0 0 1.548-1.99 7.174 7.174 0 0 1-2.273.87A3.58 3.58 0 0 0 14 4.75a3.57 3.57 0 0 0-3.57 3.57c0 .281.031.557.092.82A10.159 10.159 0 0 1 2 5.022a3.558 3.558 0 0 0-.482 1.796c0 1.241.632 2.34 1.598 2.982a3.552 3.552 0 0 1-1.616-.447v.045c0 1.736 1.234 3.181 2.872 3.506a3.576 3.576 0 0 1-1.61.062c.454 1.416 1.776 2.447 3.343 2.473A7.194 7.194 0 0 1 2 17.245a10.196 10.196 0 0 0 5.5 1.614"></path>
          </svg>
        </a>
        <a href="https://www.youtube.com/channel/UCCPNLx0irb9sbFdsdTCV6rg" target="_blank" rel="nofollow">
          <svg viewBox="0 0 576 512">
            <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
          </svg>
        </a>
        <a href="https://www.instagram.com/goldsgymindia/" target="_blank" rel="nofollow">
          <svg viewBox="0 0 448 512">
            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.6-9 132.1z"></path>
          </svg>
        </a>
      </SocialIcons>
    </ThemeProvider>
  );
};

export default Contact;

