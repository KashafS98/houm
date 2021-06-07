import React from 'react'
import { red, white } from '../utils/colors'

export default function Button({children}) {
    return (
        <button style={{background: `${red}`, color: `${white}`, border: 'none', outline:'none', height: '56px', padding: '2% 10%'}}>{children}</button>
    )
}
