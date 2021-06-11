import React from 'react'
import girl from '../assets/girl.png'
import styled from 'styled-components'
import play from '../assets/play.svg'
import plant from '../assets/plant.png'
import scrollBtn from '../assets/scroll.png'
import { red } from '../utils/colors'

const MeetHoumButton = styled.div`
    display: flex;
    color: ${red};
    font-size: 24px;
    font-weight: 500;
    cursor: pointer;
`

const Image = styled.img`
${props=> 
`width: ${props.width};
position: absolute;
top: ${props.top || '45%'};
left: ${props.left || '28%'};`
}
    
}
`
const Content = styled.div`
    font-size: 20px;
    width: 160px;
    text-align: right;
}
`

const Wrapper = styled.div`
    width: 22%;
    margin: 0 10%;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    justify-content: center;
    height: 40vh;
`

export default function MeetHoum() {
    return (
        <>
        <div style={{borderBottom:'3px solid black'}}>
        <Wrapper>
            <MeetHoumButton onClick={()=>document?document.getElementById('features').scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"}):console.log('')}>
                <img src={play} alt=''/>
                Meet Houm
            </MeetHoumButton>
            <Content> 
                See Houm in action with all the features.
            </Content>
        </Wrapper>
        </div>
        <Image src={plant} alt="" width='20%' left="60%" top="80%"/>
        <Image src={girl} alt="" width='50%'/>
        <Image style={{cursor: 'pointer'}} src={scrollBtn} alt='' width='2%' left="85%" top="65%" onClick={()=>{document?document.getElementById('features').scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"}):console.log('')}}/>
        </>
    )
}
