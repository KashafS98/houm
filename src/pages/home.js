import React from 'react'
import Features2 from '../containers/Features2'
import Fetaures1 from '../containers/Fetaures1'
import HoumMain from '../containers/HoumMain'
import HowitWorks from '../containers/HowitWorks'
import MeetHoum from '../containers/MeetHoum'
import NavBar from '../containers/NavBar'

export default function Home() {
    return (
        <div>
            <NavBar/>
            <HoumMain/>
            <MeetHoum/>
            <HowitWorks/>
            <Fetaures1/>
            <Features2/>
        </div>
    )
}
