import React from 'react'

import './NavBar_module.css'

//SVGs
import brocha from './assets/SVG/brocha.svg'

const NavBar = () => {
    return(
        <div id='_NavBar_'>
            <span>Incio</span>
            <span>What's New</span>
            <span>Nuevo</span>
            <span>Documento1</span>
            <span>Documento2</span>
            <img src={brocha}/>
            <span>Mi cuenta</span>
        </div>
    )
}


export default NavBar