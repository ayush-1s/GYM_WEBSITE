import React from 'react'
import styled from 'styled-components'
import './reusable/Style_Banner.css'; 
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
    <>
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
<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-37048c9 exad-sticky-section-no exad-glass-effect-no elementor-widget elementor-widget-heading" data-id="37048c9" data-element_type="widget" data-widget_type="heading.default">
				<div class="elementor-widget-container">
		<H2_heading>How is AF Benefitting Fitness Enthusiasts.</H2_heading>		</div>
				</div>
				<section class="elementor-section elementor-inner-section elementor-element elementor-element-6cc883c elementor-section-boxed elementor-section-height-default elementor-section-height-default exad-glass-effect-no exad-sticky-section-no" data-id="6cc883c" data-element_type="section">
						<div class="elementor-container elementor-column-gap-default">
					<div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-3942467 exad-glass-effect-no exad-sticky-section-no" data-id="3942467" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-abda033 exad-sticky-section-no exad-glass-effect-no elementor-widget elementor-widget-image" data-id="abda033" data-element_type="widget" data-widget_type="image.default">
				<div class="elementor-widget-container">
													<img decoding="async" width="300" height="300" src="https://franchise.anytimefitness.co.in/wp-content/uploads/2022/10/2-1.png" class="attachment-full size-full wp-image-2176 entered lazyloaded" alt="" data-lazy-srcset="https://franchise.anytimefitness.co.in/wp-content/uploads/2022/10/2-1.png 300w, https://franchise.anytimefitness.co.in/wp-content/uploads/2022/10/2-1-150x150.png 150w" data-lazy-sizes="(max-width: 300px) 100vw, 300px" data-lazy-src="https://franchise.anytimefitness.co.in/wp-content/uploads/2022/10/2-1.png" data-ll-status="loaded" sizes="(max-width: 300px) 100vw, 300px" srcset="https://franchise.anytimefitness.co.in/wp-content/uploads/2022/10/2-1.png 300w, https://franchise.anytimefitness.co.in/wp-content/uploads/2022/10/2-1-150x150.png 150w"/><noscript><img loading="lazy" decoding="async" width="300" height="300" src="https://franchise.anytimefitness.co.in/wp-content/uploads/2022/10/2-1.png" class="attachment-full size-full wp-image-2176" alt="" srcset="https://franchise.anytimefitness.co.in/wp-content/uploads/2022/10/2-1.png 300w, https://franchise.anytimefitness.co.in/wp-content/uploads/2022/10/2-1-150x150.png 150w" sizes="(max-width: 300px) 100vw, 300px" /></noscript>													</div>
				</div>
				<div class="elementor-element elementor-element-750223d exad-sticky-section-no exad-glass-effect-no elementor-widget elementor-widget-text-editor" data-id="750223d" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
							<p>One Membership = Global Access</p>						</div>
				</div>
					</div>
		</div>
				<div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-967ec08 exad-glass-effect-no exad-sticky-section-no" data-id="967ec08" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-3124b42 exad-sticky-section-no exad-glass-effect-no elementor-widget elementor-widget-image" data-id="3124b42" data-element_type="widget" data-widget_type="image.default">
				<div class="elementor-widget-container">
													<img decoding="async" width="300" height="300" src="https://franchise.anytimefitness.co.in/wp-content/uploads/2022/10/1-2.png" class="attachment-full size-full wp-image-2175 entered lazyloaded" alt="" data-lazy-srcset="https://franchise.anytimefitness.co.in/wp-content/uploads/2022/10/1-2.png 300w, https://franchise.anytimefitness.co.in/wp-content/uploads/2022/10/1-2-150x150.png 150w" data-lazy-sizes="(max-width: 300px) 100vw, 300px" data-lazy-src="https://franchise.anytimefitness.co.in/wp-content/uploads/2022/10/1-2.png" data-ll-status="loaded" sizes="(max-width: 300px) 100vw, 300px" srcset="https://franchise.anytimefitness.co.in/wp-content/uploads/2022/10/1-2.png 300w, https://franchise.anytimefitness.co.in/wp-content/uploads/2022/10/1-2-150x150.png 150w"/><noscript><img loading="lazy" decoding="async" width="300" height="300" src="https://franchise.anytimefitness.co.in/wp-content/uploads/2022/10/1-2.png" class="attachment-full size-full wp-image-2175" alt="" srcset="https://franchise.anytimefitness.co.in/wp-content/uploads/2022/10/1-2.png 300w, https://franchise.anytimefitness.co.in/wp-content/uploads/2022/10/1-2-150x150.png 150w" sizes="(max-width: 300px) 100vw, 300px" /></noscript>													</div>
				</div>
				<div class="elementor-element elementor-element-e418b18 exad-sticky-section-no exad-glass-effect-no elementor-widget elementor-widget-text-editor" data-id="e418b18" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
							<p>Workout Anytime, Anywhere</p>						</div>
				</div>
					</div>
		</div>
				<div class="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-402a17b exad-glass-effect-no exad-sticky-section-no" data-id="402a17b" data-element_type="column">
			<div class="elementor-widget-wrap elementor-element-populated">
						<div class="elementor-element elementor-element-30b478c exad-sticky-section-no exad-glass-effect-no elementor-widget elementor-widget-image" data-id="30b478c" data-element_type="widget" data-widget_type="image.default">
				<div class="elementor-widget-container">
													<img decoding="async" width="300" height="300" src="https://franchise.anytimefitness.co.in/wp-content/uploads/2022/10/3-1.png" class="attachment-full size-full wp-image-2177 entered lazyloaded" alt="" data-lazy-srcset="https://franchise.anytimefitness.co.in/wp-content/uploads/2022/10/3-1.png 300w, https://franchise.anytimefitness.co.in/wp-content/uploads/2022/10/3-1-150x150.png 150w" data-lazy-sizes="(max-width: 300px) 100vw, 300px" data-lazy-src="https://franchise.anytimefitness.co.in/wp-content/uploads/2022/10/3-1.png" data-ll-status="loaded" sizes="(max-width: 300px) 100vw, 300px" srcset="https://franchise.anytimefitness.co.in/wp-content/uploads/2022/10/3-1.png 300w, https://franchise.anytimefitness.co.in/wp-content/uploads/2022/10/3-1-150x150.png 150w"/><noscript><img loading="lazy" decoding="async" width="300" height="300" src="https://franchise.anytimefitness.co.in/wp-content/uploads/2022/10/3-1.png" class="attachment-full size-full wp-image-2177" alt="" srcset="https://franchise.anytimefitness.co.in/wp-content/uploads/2022/10/3-1.png 300w, https://franchise.anytimefitness.co.in/wp-content/uploads/2022/10/3-1-150x150.png 150w" sizes="(max-width: 300px) 100vw, 300px" /></noscript>													</div>
				</div>
				<div class="elementor-element elementor-element-576ad06 exad-sticky-section-no exad-glass-effect-no elementor-widget elementor-widget-text-editor" data-id="576ad06" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
							<p>Personalized Coaching</p>						</div>
				</div>
					</div>
		</div>
					</div>
		</section>
				<div class="elementor-element elementor-element-fe8eb10 exad-sticky-section-no exad-glass-effect-no elementor-widget elementor-widget-text-editor" data-id="fe8eb10" data-element_type="widget" data-widget_type="text-editor.default">
				<div class="elementor-widget-container">
							<p><span class="JsGRdQ">At Anytime Fitness, healthy members and healthy unit economics go together. We’ve got the offerings and support you need to do business confidently in this industry. No false promises. No hidden conditions. Just the best returns on your investments along with your future gym members.</span></p>						</div>
				</div>
				<div class="elementor-element elementor-element-4684efa elementor-align-center exad-sticky-section-no exad-glass-effect-no elementor-widget elementor-widget-button" data-id="4684efa" data-element_type="widget" data-widget_type="button.default">
				<div class="elementor-widget-container">
					<div class="elementor-button-wrapper">
			<a class="elementor-button elementor-button-link elementor-size-sm elementor-animation-grow" href="https://franchise.anytimefitness.co.in/wp-content/uploads/2023/06/Digital-AF-Brochure-1.pdf">
						<span class="elementor-button-content-wrapper">
									<span class="elementor-button-text">Download Brochure</span>
					</span>
					</a>
		</div>
				</div>
				</div>
					</div> 
</>
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

const H2_heading=styled.h2`
    color: #1d1b4f;
    font-family: Montserrat, Sans-serif;
    font-size: 3rem;
    font-weight: 700;
`;
const Bottom = styled.div`
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






  






