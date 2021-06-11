import React from 'react'
import styled from 'styled-components'
import shared from '../assets/Bitmap.png'
import Button from '../components/Button'

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    margin: 0 auto;
    align-items: center;
    div{
        width: 40%;
        p {
            font-size: 18px;
            width: 70%;
            line-height: 2rem
        }
    }
`

export default function PersonalPhoto() {
    return (
        <Wrapper>
            <div>
                <h3>Shared Documents</h3>
                <p>To bring back privacy on the internet. To have your data on the internet and yet have it private. Not accessed or owned by any other company. To own a private place on the internet where you can keep your private data actually private.</p>
                <p>To bring back privacy on the internet. To have your data on the internet</p>
                <Button>Build Your Houm</Button>
            </div>
            <img src={shared} alt='' width='50%'/>
        </Wrapper>
    )
}
