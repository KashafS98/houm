import React from 'react'
import styled from 'styled-components'
import fingerprint from '../assets/fingerprint.svg'

const LogoContainer = styled.div`
    width: 10%;
    aspect-ratio: 1/1;
    background: black;
    display: flex;
    justify-content: center;
    align-items: center;
`

export default function Logo() {
    return (
        <LogoContainer>
            <img src={fingerprint} alt=""/>
        </LogoContainer>
    )
}
