import {React} from 'react'

import './index_module.css'

import TopBar from './TopBar.jsx'
import ToolBar from './ToolBar.jsx'
import NavBar from './NavBar.jsx'

const Header = () => {
    return(
        <div>
            <NavBar />
            <TopBar />
            <ToolBar />
         


        </div>
    )
}


export default Header