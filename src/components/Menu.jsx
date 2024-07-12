import React,{useState,useRef,useEffect} from "react";
import NewWorkBook from "./menu/NewWorkBook";
import SaveAs from "./menu/SaveAs";
import Print from "./menu/Print"
import Share from "./menu/Share"
import Encrypt from "./menu/Encrypt"
import SecureAndRecovery from "./menu/CopySecured";
import "./Menu_module.css"

//SVGs
import paste from '../assets/SVG/paste.svg'
import chevronRight from '../assets/SVG/chevronRight.svg'


export default function Menu({setIsMenuOpen}){
   
    const [hoverMenuState, setHoverMenuState] = useState();
  
    const menuRef = useRef(null);
    
  
    function handleMenuHover(position) {
      console.log(position)
      setHoverMenuState(position);
    }
  
    useEffect(() => {
      let handler = (e) =>
        {
            if(menuRef.current != null && !menuRef.current.contains(e.target))
              setIsMenuOpen()
        }
        document.addEventListener("mousedown", handler)
    })

    return (

        <div className="menuDes" ref={menuRef}>
            <div>
              <ul>
                <li>
                  {hoverMenuState === 1 && <NewWorkBook />}
                  <button>
                    <span>Nuevo</span>
                    <img
                      src={paste}
                      className="sec4_img1VistaPrevia"
                      width={24}
                    />
                  </button>

                  <button
                    className="chevron_right"
                    onMouseEnter={() => handleMenuHover(1)}
                  >
                    <img src={chevronRight} width={24}/>
                  </button>
                </li>
                <li>
                  <button>
                    <span>Abrir</span>
                    <img
                      src={paste}
                      className="sec4_img1VistaPrevia"
                      width={24}
                    />
                  </button>
                </li>
                <li>
                  <button>
                    <span>Guardar</span>
                    <img
                      src={paste}
                      className="sec4_img1VistaPrevia"
                      width={24}
                    />
                  </button>
                </li>
                <li>
                  {hoverMenuState === 4 && <SaveAs />}
                  <button>
                    <span>Guardar como</span>
                    <img
                      src={paste}
                      className="sec4_img1VistaPrevia"
                      width={24}
                    />
                  </button>
                  <button
                    className="chevron_right"
                    onMouseEnter={() => handleMenuHover(4)}
                  >
                    <img src={chevronRight} width={24}/>
                  </button>
                </li>
                <li>
                  <button>
                    <span>Exportar a PDF</span>
                    <img
                      src={paste}
                      className="sec4_img1VistaPrevia"
                      width={24}
                    />
                  </button>
                </li>
                <li>
                  <button>
                    <span>Exportar como Imagen</span>
                    <img
                      src={paste}
                      className="sec4_img1VistaPrevia"
                      width={24}
                    />
                  </button>
                </li>
                <li>
                  {hoverMenuState === 7 && <Print />}
                  <button>
                    <span>Imprimir</span>
                    <img
                      src={paste}
                      className="sec4_img1VistaPrevia"
                      width={24}
                    />
                  </button>
                  <button
                    className="chevron_right"
                    onMouseEnter={() => handleMenuHover(7)}
                  >
                    <img src={chevronRight} width={24}/>
                  </button>
                </li>
                <hr></hr>
                <li>
                  {hoverMenuState === 8 && <Share />}
                  <button>
                    <span>Compartir</span>
                    <img
                      src={paste}
                      className="sec4_img1VistaPrevia"
                      width={24}
                    />
                  </button>
                  <button
                    className="chevron_right"
                    onMouseEnter={() => handleMenuHover(8)}
                  >
                    <img src={chevronRight} width={24}/>
                  </button>
                </li>
                <li>
                  {hoverMenuState === 9 && <Encrypt />}
                  <button>
                    <span>Cifrado de documento</span>
                    <img
                      src={paste}
                      className="sec4_img1VistaPrevia"
                      width={24}
                    />
                  </button>
                  <button
                    className="chevron_right"
                    onMouseEnter={() => handleMenuHover(9)}
                  >
                    <img src={chevronRight} width={24}/>
                  </button>
                </li>
                <li>
                  {hoverMenuState === 10 && <SecureAndRecovery />}
                  <button>
                    <span>Copia de seguridad y recuperacion</span>
                    <img
                      src={paste}
                      className="sec4_img1VistaPrevia"
                      width={24}
                    />
                  </button>
                  <button
                    className="chevron_right"
                    onMouseEnter={() => handleMenuHover(10)}
                  >
                    <img src={chevronRight} width={24}/>
                  </button>
                </li>
                <hr/>

                <li>
                  <button>
                    <span>Ayuda</span>
                    <img
                      src={paste}
                      className="sec4_img1VistaPrevia"
                      width={24}
                    />
                  </button>
                </li>
                <li>
                  <button>
                    <span>Opciones</span>
                    <img
                      src={paste}
                      className="sec4_img1VistaPrevia"
                      width={24}
                    />
                  </button>
                </li>
                <li>
                  <button>
                    <span>Salir</span>
                    <img
                      src={paste}
                      className="sec4_img1VistaPrevia"
                      width={24}
                    />
                  </button>
                </li>
              </ul>
            </div>
          </div>
        
    )
}