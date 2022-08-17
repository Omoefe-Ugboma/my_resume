import React from 'react'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import { DarkTheme } from './Themes'

import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/SocialIcons'
import PowerButton from '../subComponents/PowerButton'
import ParticleComponent from '../subComponents/ParticleComponent'
import astronaut from '../assets/Images/spaceman.png'

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

            </Box>
        </ThemeProvider>
    )
}

export default AboutPage