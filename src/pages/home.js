import React from 'react'
import HoumMain from '../containers/HoumMain'
import MeetHoum from '../containers/MeetHoum'
import NavBar from '../containers/NavBar'

export default function Home() {
    return (
        <div>
            <NavBar/>
            <HoumMain/>
            <MeetHoum/>
        </div>
    )
}
