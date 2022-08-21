import { motion } from 'framer-motion'
import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
// import { Facebook, Github, Twitter, YouTube } from '../components/AllSvgs'
import { Github } from '../components/AllSvgs'
import { DarkTheme } from '../components/Themes'

const Icons = styled.div`
display: flex;
flex-direction:column;
align-items:center;

position:fixed;
bottom:0;
left:2rem;

z-index:3;

&>*:not(:last-child){
    margin:0.5rem 0;
}

`
const Line = styled(motion.span)`
width:2px;
height:6rem;
background-color:${props => props.color === 'dark' ? DarkTheme.text : DarkTheme.body};
`
const SocialIcons = (props) => {
    return (

        <Icons>
            <motion.div
                initial={{ transform: "scale(0)" }}
                animate={{ scale: [0, 1, 1.5, 1] }}
                transition={{ type: "spring", duration: 1, delay: 1 }}>
                <NavLink style={{ color: 'inherit' }} target="_blank" to={{ pathname: "https://github.com/Omoefe-Ugboma/book_list_app" }}>
                    <Github width={25} height={25} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body} />
                </NavLink>
            </motion.div>
            <motion.div
                initial={{ transform: "scale(0)" }}
                animate={{ scale: [0, 1, 1.5, 1] }}
                transition={{ type: "spring", duration: 1, delay: 1.2 }}>
                <NavLink style={{ color: 'inherit' }} target="_blank" to={{ pathname: "https://github.com/Omoefe-Ugboma/AirbnbClone" }}>
                    <Twitter width={25} height={25} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body} />
                </NavLink>
            </motion.div>
            <motion.div
                initial={{ transform: "scale(0)" }}
                animate={{ scale: [0, 1, 1.5, 1] }}
                transition={{ type: "spring", duration: 1, delay: 1.4 }}>
                <NavLink style={{ color: 'inherit' }} target="_blank" to={{ pathname: "https://github.com/Omoefe-Ugboma/Currency_Convert" }}>
                    <Github width={25} height={25} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body} />
                </NavLink>
            </motion.div>
            <motion.div
                initial={{ transform: "scale(0)" }}
                animate={{ scale: [0, 1, 1.5, 1] }}
                transition={{ type: "spring", duration: 1, delay: 1.6 }}>
                <NavLink style={{ color: 'inherit' }} target="_blank" to={{ pathname: "https://github.com/Omoefe-Ugboma/FlexTlwebsite" }}>
                    <Github width={25} height={25} fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body} />
                </NavLink>
            </motion.div>

            <Line color={props.theme}
                initial={{
                    y: 200,
                    transition: { type: 'spring', duration: 1.5, delay: 1 }
                }}
                animate={{
                    y: 0,
                    transition: { type: 'spring', duration: 1.5, delay: 1 }
                }}
            />
        </Icons>
    )
}

export default SocialIcons