import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import { DarkTheme } from './Themes'

import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/SocialIcons'
import PowerButton from '../subComponents/PowerButton'
import ParticleComponent from '../subComponents/ParticleComponent'
import astronaut from '../assets/Images/spaceman.png'
import BigTitle from '../subComponents/BigTitle'

const Box = styled.div`
background-color:${props => props.theme.body};
width:100vw;
height:100vh;
position:relative;
overflow:hidden; 
`
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }
`

const Spaceman = styled.div`
position:absolute;
top:10%;
right:5%;
width:20vw;
animation: ${float} 4s ease infinite;
img{
    width:100%;
    height:auto;
}
`
const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color:${props => props.theme.text};
padding:2rem;
width:60vw;
height:65vh;
z-index:3;
line-height:1.2;

display:flex;
justify-content:center;
align-items:center;
font-size:calc(0.6rem + 1vw);
backdrop-filter:blur(4px);

position:absolute;
left:calc(5rem + 5vw);
top:8rem;
font-family:'Ubuntu Mono', monospace;
font-style:italic;
`

const AboutPage = () => {
    return (
        <ThemeProvider theme={DarkTheme}>
            <Box>

                <LogoComponent theme='dark' />
                <SocialIcons theme='dark' />
                <PowerButton />
                <ParticleComponent theme='dark' />
                <Spaceman>
                    <img src={astronaut} alt="spaceman" />
                </Spaceman>
                <Main>
                    <br /><br />
                    "Hello, my name is Omoefe Ugboma, and I graduated from Middlesex University in 2014, with a degree in Information Technology and Business Information System. My interests are in software engineering, and I enjoy making solutions-focused, effective products with wonderful user interfaces.
                    <br /><br />
                    I've been highly involved in my daily coding routine, where I create fantastic concepts and make them true. React, Redux, Jest, Babel, Flow, webpack, Hooks, and Redux make up my builts, all of which are mobile-responsive and built using the current web technology stack.".
                    <br /><br />
                    I'm interested in the whole modern stack Like trying new things and building great projects. I'm an independent freelancer and blogger. I love to write blogs and read books.

                </Main>
                <BigTitle text="ABOUT" top="10%" left="5%" />
            </Box>
        </ThemeProvider>
    )
}

export default AboutPage