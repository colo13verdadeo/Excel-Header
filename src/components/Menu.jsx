import React,{useState,useRef,useEffect} from "react";
import NewWorkBook from "./menu/NewWorkBook";
import SaveAs from "./menu/SaveAs";
import "./Menu_module.css"

//SVGs
import paste from '../assets/SVG/paste.svg'
import chevronRight from '../assets/SVG/chevronRight.svg'


export default function Menu({setIsMenuOpen}){
   
    const [hoverMenuState, setHoverMenuState] = useState();
  
    const menuRef = useRef(null);
    
  
    function handleMenuHover(position) {
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
                  {hoverMenuState === 4 && <SaveAs />}
                  <button>
                    <span>Save As</span>
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
                <hr></hr>
                <li>
                  {hoverMenuState === 4 && <SaveAs />}
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
                    onMouseEnter={() => handleMenuHover(4)}
                  >
                    <img src={chevronRight} width={24}/>
                  </button>
                </li>
                <li>
                  {hoverMenuState === 4 && <SaveAs />}
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
                    onMouseEnter={() => handleMenuHover(4)}
                  >
                    <img src={chevronRight} width={24}/>
                  </button>
                </li>
                <li>
                  {hoverMenuState === 4 && <SaveAs />}
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
                    onMouseEnter={() => handleMenuHover(4)}
                  >
                    <img src={chevronRight} width={24}/>
                  </button>
                </li>
                <hr>
                </hr>

                <li>
                  {hoverMenuState === 4 && <SaveAs />}
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
                    onMouseEnter={() => handleMenuHover(4)}
                  >
                    <img src={chevronRight} width={24}/>
                  </button>
                </li>
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
              </ul>
            </div>
          </div>
        
    )
}