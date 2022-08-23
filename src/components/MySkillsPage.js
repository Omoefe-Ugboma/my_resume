import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { lightTheme } from './Themes'
import { Design, Develope } from './AllSvgs'
import LogoComponent from '../subComponents/LogoComponent'
import SocialIcons from '../subComponents/SocialIcons'
import PowerButton from '../subComponents/PowerButton'
import ParticleComponent from '../subComponents/ParticleComponent'
import BigTitle from '../subComponents/BigTitle'


const Box = styled.div`
background-color:${props => props.theme.body};
width:100vw;
height:100vh;
position:relative;
display:flex;
justify-content:space-evenly;
align-items:center;
`
const Main = styled.div`
border: 2px solid ${props => props.theme.text};
color:${props => props.theme.text};
background-color:${props => props.theme.body};
padding: 2rem;
width:30vw;
height:60vh;
z-index:3;
line-height:1.2;
cursor:pointer;

font-family:'Ubuntu Nono',monospace;
display:flex;
flex-direction:column;
justify-content:space-between;

&:hover{
    color:${props => props.theme.body};
    background-color:${props => props.theme.text};
}
`
const Title = styled.h2`
display:flex;
justify-content:center;
align-items:center;
font-size:calc(1em + 1vw);

${Main}:hover &{
    &>*{
        fill:${props => props.theme.body};
    }
}

&>*:first-child{
    margin-right:1rem;
}

`
const Description = styled.div`
color: ${props => props.theme.text};
font-size:calc(0.3em + 1vw);
padding:0.5rem 0;

${Main}:hover &{
     
        color:${props => props.theme.body};
  
}

strong{
    margin-bottom:1rem;
    text-transform:uppercase;
}
ul,p{
    margin-left:2rem;
}
`

const MySkillsPage = () => {
    return (
        <ThemeProvider theme={lightTheme}>
            <Box>

                <LogoComponent theme='light' />
                <SocialIcons theme='light' />
                <PowerButton />
                <ParticleComponent theme='light' />
                <Main>
                    <Title>
                        <Design width={40} height={40} />Web Designer
                    </Title>
                    <Description>Designing and constructing website interfaces, navigation, and aesthetics for clients and enterprises. a seasoned web designer who continues to provide clients with services.
                    </Description>
                    <Description>
                        <strong>I like to Design</strong>
                        <ul>
                            <li>
                                Engaging and responsive landing pages
                            </li>
                            <li>
                                Integrating client CMS programs and data feeds into websites
                            </li>
                            <li>
                                Optimising sites for maximum speed and scalability
                            </li>
                        </ul>
                    </Description>
                    <Description>
                        <strong>Tools</strong>
                        <ul>
                            <li>
                                Figma
                            </li>
                            <li>
                                WordPress
                            </li>
                            <li>
                                SEO knowledge
                            </li>
                        </ul>
                    </Description>
                </Main>
                <Main>
                    <Title>
                        <Develope width={40} height={40} /> Front-End Developer
                    </Title>
                    <Description>
                        creating new user-facing features, choosing the layout and structure of web pages, creating reusable programs, reducing the amount of time it takes for pages to load, and employing a range of markup languages to make the web page.
                    </Description>
                    <Description>
                        <strong>Skills</strong>
                        <p>Html, Css, Js, React, Redux, Angular, Angular Material, NgRx, Sass, Bootstrap, Tailwind, Rest Api's etc.</p>
                    </Description>
                    <Description>
                        <strong>Tools</strong>
                        <p>VScode, Source Control, Codepen, Linux, CI/CD etc.</p>
                    </Description>
                </Main>
                <BigTitle text="SKILLS" top="80%" right="30%" />
            </Box>
            <Box>

                <LogoComponent theme='light' />
                <SocialIcons theme='light' />
                <PowerButton />
                <ParticleComponent theme='light' />
                <Main>
                    <Title>
                        <Design width={40} height={40} />Back-End Developer
                    </Title>
                    <Description>creates server-side features and components that are indirectly accessed by users through front-end software or systems. able to create, maintain, test, and debug the complete back end.
                    </Description>
                    <Description>
                        <strong>I like to Develop</strong>
                        <ul>
                            <li>
                                Experience designing RESTful APIs, specifically for web and mobile apps.
                            </li>
                            <li>
                                Experience leading a team
                            </li>
                            <li>
                                Optimization of web applications for performance and scalability
                            </li>
                        </ul>
                    </Description>
                    <Description>
                        <strong>Tools</strong>
                        <ul>
                            <li>
                                Python, Django, Node, Express, Java, Spring Boot
                            </li>
                            <li>
                                MySQL, Docker, Postman, Swager,
                            </li>
                        </ul>
                    </Description>
                </Main>
                <Main>
                    <Title>
                        <Develope width={40} height={40} /> Software Engineer
                    </Title>
                    <Description>
                        utilizing engineering principles while creating software. Develop, create, and test user-satisfactory end-user programs using software programming languages, as well as analyze and modify the software that is already in use.
                    </Description>
                    <Description>
                        <strong>Skills</strong>
                        <p>Object-oriented Programming, Data Structures and Algorithms, Database Development</p>
                    </Description>
                    <Description>
                        <strong>Technical Skills</strong>
                        <p>JavaScript(ES6, Redux), Building API's, MySQL, SQL, TypeScript and more.</p>
                    </Description>
                </Main>
                <BigTitle text="SKILLS" top="80%" right="30%" />
            </Box>
        </ThemeProvider>
    )
}

export default MySkillsPage