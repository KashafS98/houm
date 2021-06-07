import React from 'react'
import Logo from '../components/Logo'
import styled from 'styled-components'
import { red } from '../utils/colors'

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const Menu = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    width: 25%;
    font-size: 16px;
    line-height: 40px;
    div{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        width: 66%;
    }
    hr{
        width: 100%;
        border: 2px solid ${red};
    }
`

const menu = [
    {
        key: 1,
        name: 'Features',
        link: '#',
    },
    {
        key: 2,
        name: 'Pricing',
        link: '#',
    },
    {
        key: 3,
        name: 'Resources',
        link: '#',
    }
]

export default function NavBar() {
    return (
        <Wrapper>
            <Logo/>
            <Menu>
                <div>
                {
                    menu.map((item,key)=>{
                        return <a href={item.link} key={key}>{item.name}</a>
                    })
                }
                </div>
                <hr/>
            </Menu>
        </Wrapper>
    )
}
