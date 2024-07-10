import {React, useState} from 'react'

import './TopBar_module.css'

const TopBar = ({SetCarouselToolBar}) => {

    const [estadoSpan, setEstadoSpan] = useState(2)

    return(
        <div className='_TopBar_'>
            <div id='Menu_TopBar_'>
                <img src='/svg/barras.svg' className='TopBarImg1'></img>
                <span className={ estadoSpan == 0 ? 'openSpan' : ""}  onClick={() => setEstadoSpan(0)}>Menu</span>
            </div>
            <span className={ estadoSpan == 1 ? 'openSpan' : ""} onClick={() => setEstadoSpan(1)}>Abrir</span>
            <span className={ estadoSpan == 2 ? 'openSpan' : ""} onClick={() => {setEstadoSpan(2); SetCarouselToolBar(2)}}>Inicio</span>
            <span className={ estadoSpan == 3 ? 'openSpan' : ""} onClick={() => {setEstadoSpan(3); SetCarouselToolBar(3)}}>Insertar</span>
            <span className={ estadoSpan == 4 ? 'openSpan' : ""} onClick={() => {setEstadoSpan(4); SetCarouselToolBar(4)}}>Diseño de Pagina</span>
            <span className={ estadoSpan == 5 ? 'openSpan' : ""} onClick={() => {setEstadoSpan(5); SetCarouselToolBar(5)}}>Referencias</span>
            <span className={ estadoSpan == 6 ? 'openSpan' : ""} onClick={() => {setEstadoSpan(6); SetCarouselToolBar(6)}}>Revisar</span>
            <span className={ estadoSpan == 7 ? 'openSpan' : ""} onClick={() => {setEstadoSpan(7); SetCarouselToolBar(7)}}>Vista</span>
            <span className={ estadoSpan == 8 ? 'openSpan' : ""} onClick={() => {setEstadoSpan(8); SetCarouselToolBar(8)}}>Herramientas</span>
            {/* Menu?? */}
     

        </div>
    )
}


export default TopBar