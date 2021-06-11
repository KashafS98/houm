import React from 'react'
import styled from 'styled-components'
import { red } from '../utils/colors'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 8% auto;
    h1{
        margin: 0 3.5%; 
    }
`
const Container = styled.div`
    display: flex;
    margin-bottom: 8%;
`
const Item = styled.div`
    padding: 3.5%;
    text-align: left;
    p{
        font-size: 18px;
        width: 80%;
    }
`

const data = [
    {
        title: 'Secure your data',
        description: 'It’s time to start treating data like your property. We are Houm, the privacy experts.'
    },
    {
        title: 'Get a Personal Domain',
        description: 'It’s time to start treating data like your property. We are Houm, the privacy experts.'
    },
    {
        title: 'Flexible Storage Plan',
        description: 'It’s time to start treating data like your property. We are Houm, the privacy experts.'
    }
]


export default function Fetaures1() {
    return (
        <Wrapper>
        <Container>
            {
                data.map(item=><Item>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                </Item>)
            }
        </Container>
        <h1>
            Your <span style={{color: red}}>data privacy</span> and security are a top concern for us.
        </h1>
        </Wrapper>
    )
}
