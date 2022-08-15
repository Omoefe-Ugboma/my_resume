// Home button
import React from 'react'
import styled from 'styled-components'
import { PowerBtn } from '../components/AllSvgs'

const Power = styled.button`
position: fixed;
top: 2rem;
left: 50%;
transform:translate(-50%, 0);

background-color:#FCF6F4;
padding:0.3rem;
border-radius:50%;
border:1px solid #000;
width:2.5rem;
height:2.5rem;
`
const PowerButton = () => {
    return (
        <Power>
            <PowerBtn height={30} width={30} />
        </Power >
    )
}

export default PowerButton
