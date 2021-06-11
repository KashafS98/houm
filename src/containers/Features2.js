import React from 'react'
import Accordion from '../components/Accordion'
import { red, wheat } from '../utils/colors'
import PersonalPhoto from './PersonalPhoto';

const data = [
    {
        title: 'Personal Photographs',
        component: <PersonalPhoto/>
    },
    {
        title: 'Your important mails',
        component: <p>Nothing to see here!</p>
    },
    {
        title: 'Chat with close ones',
        component: <p>Nothing to see here!</p>
    }
]

export default function Features2() {
    return (
      <div
        id="features"
        style={{
          background: wheat,
          padding: "5% 0",
          position: 'relative'
        }}
      > 
        <a href="#features">
          <h6 style={{color:red, position:'absolute', left: '80%', textAlign:'right', top:'-6%', width: '115px'}}>See Our Features</h6>
        </a>
        <Accordion data={data} />
      </div>
    );
}
