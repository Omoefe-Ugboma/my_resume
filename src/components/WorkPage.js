import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { DarkTheme } from './Themes'

import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/SocialIcons'
import PowerButton from '../subComponents/PowerButton'

import { Work } from "../data/WorkData";

const Box = styled.div`
background-color:${props => props.theme.body};
width:100vw;
height:100vh;
position:relative;
overflow:hidden; 
`


const Main = styled.ul`
 position: fixed;
 top: 12rem;
 left: calc(10rem + 15vw);
 height: 40vh;
 display: flex;

 color:white;
`

const WorkPage = () => {
    return (
        <ThemeProvider theme={DarkTheme}>
            <Box>

                <LogoComponent theme='dark' />
                <SocialIcons theme='dark' />
                <PowerButton />

                <Main>

                </Main>

            </Box>
        </ThemeProvider>
    )
}

export default WorkPage