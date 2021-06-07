import React from 'react'
import girl from '../assets/girl.png'
import styled from 'styled-components'

const Image = styled.img`
    width: 50%;
    position: absolute;
    top: 40%;
    left: 24%;
}
`

export default function MeetHoum() {
    return (
        <div>
            <Image src={girl} alt=""/>
        </div>
    )
}
