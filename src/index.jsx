import {React, useState} from 'react'

import './index_module.css'

import TopBar from './TopBar.jsx'
import ToolBar from './ToolBar.jsx'
import NavBar from './NavBar.jsx'

const Header = () => {
    const [CarouselToolBar, SetCarouselToolBar] = useState(1)
    return(
        <div>
            <NavBar />
            <TopBar SetCarouselToolBar={SetCarouselToolBar}/>
            <ToolBar CarouselBar={CarouselToolBar}/>
         


        </div>
    )
}


export default Header