import React,{useState,useRef,useEffect} from "react";
import NewWorkBook from "./menu/NewWorkBook";
import SaveAs from "./menu/SaveAs";
import "./Menu_module.css"
export default function Menu({setIsMenuOpen}){
   
    const [hoverMenuState, setHoverMenuState] = useState();
  
    const menuRef = useRef(null);
    
  
    function handleMenuHover(position) {
      setHoverMenuState(position);
    }
  
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target) && !buttonRef.current.contains(event.target)) {
        setIsMenuOpen()
      }
    };
  
    useEffect(() => {
      document.addEventListener("click", handleClickOutside);
    }, []);

    return (

        <div className="menuDes" ref={menuRef}>
            <div>
              <ul>
                <li>
                  {hoverMenuState === 1 && <NewWorkBook />}
                  <button>
                    <span>Nuevo</span>
                    <img
                      src="/svg/paste.svg"
                      className="sec4_img1VistaPrevia"
                      width={24}
                    ></img>
                  </button>

                  <button
                    className="chevron_right"
                    onMouseEnter={() => handleMenuHover(1)}
                  >
                    <img src="/svg/chevronRight.svg" width={24}></img>
                  </button>
                </li>
                <li>
                  <button>
                    <span>Abrir</span>
                    <img
                      src="/svg/paste.svg"
                      className="sec4_img1VistaPrevia"
                      width={24}
                    ></img>
                  </button>
                </li>
                <li>
                  <button>
                    <span>Guardar</span>
                    <img
                      src="/svg/paste.svg"
                      className="sec4_img1VistaPrevia"
                      width={24}
                    ></img>
                  </button>
                </li>
                <li>
                  {hoverMenuState === 4 && <SaveAs />}
                  <button>
                    <span>Guardar como</span>
                    <img
                      src="/svg/paste.svg"
                      className="sec4_img1VistaPrevia"
                      width={24}
                    ></img>
                  </button>
                  <button
                    className="chevron_right"
                    onMouseEnter={() => handleMenuHover(4)}
                  >
                    <img src="/svg/chevronRight.svg" width={24}></img>
                  </button>
                </li>
                <li>
                  <button>
                    <span>Exportar a PDF</span>
                    <img
                      src="/svg/paste.svg"
                      className="sec4_img1VistaPrevia"
                      width={24}
                    ></img>
                  </button>
                </li>
                <li>
                  <button>
                    <span>Exportar como Imagen</span>
                    <img
                      src="/svg/paste.svg"
                      className="sec4_img1VistaPrevia"
                      width={24}
                    ></img>
                  </button>
                </li>
                <li>
                  {hoverMenuState === 4 && <SaveAs />}
                  <button>
                    <span>Save As</span>
                    <img
                      src="/svg/paste.svg"
                      className="sec4_img1VistaPrevia"
                      width={24}
                    ></img>
                  </button>
                  <button
                    className="chevron_right"
                    onMouseEnter={() => handleMenuHover(4)}
                  >
                    <img src="/svg/chevronRight.svg" width={24}></img>
                  </button>
                </li>
                <hr></hr>
                <li>
                  {hoverMenuState === 4 && <SaveAs />}
                  <button>
                    <span>Imprimir</span>
                    <img
                      src="/svg/paste.svg"
                      className="sec4_img1VistaPrevia"
                      width={24}
                    ></img>
                  </button>
                  <button
                    className="chevron_right"
                    onMouseEnter={() => handleMenuHover(4)}
                  >
                    <img src="/svg/chevronRight.svg" width={24}></img>
                  </button>
                </li>
                <li>
                  {hoverMenuState === 4 && <SaveAs />}
                  <button>
                    <span>Compartir</span>
                    <img
                      src="/svg/paste.svg"
                      className="sec4_img1VistaPrevia"
                      width={24}
                    ></img>
                  </button>
                  <button
                    className="chevron_right"
                    onMouseEnter={() => handleMenuHover(4)}
                  >
                    <img src="/svg/chevronRight.svg" width={24}></img>
                  </button>
                </li>
                <li>
                  {hoverMenuState === 4 && <SaveAs />}
                  <button>
                    <span>Cifrado de documento</span>
                    <img
                      src="/svg/paste.svg"
                      className="sec4_img1VistaPrevia"
                      width={24}
                    ></img>
                  </button>
                  <button
                    className="chevron_right"
                    onMouseEnter={() => handleMenuHover(4)}
                  >
                    <img src="/svg/chevronRight.svg" width={24}></img>
                  </button>
                </li>
                <hr>
                </hr>

                <li>
                  {hoverMenuState === 4 && <SaveAs />}
                  <button>
                    <span>Copia de seguridad y recuperacion</span>
                    <img
                      src="/svg/paste.svg"
                      className="sec4_img1VistaPrevia"
                      width={24}
                    ></img>
                  </button>
                  <button
                    className="chevron_right"
                    onMouseEnter={() => handleMenuHover(4)}
                  >
                    <img src="/svg/chevronRight.svg" width={24}></img>
                  </button>
                </li>
                <li>
                  <button>
                    <span>Ayuda</span>
                    <img
                      src="/svg/paste.svg"
                      className="sec4_img1VistaPrevia"
                      width={24}
                    ></img>
                  </button>
                </li>
                <li>
                  <button>
                    <span>Opciones</span>
                    <img
                      src="/svg/paste.svg"
                      className="sec4_img1VistaPrevia"
                      width={24}
                    ></img>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        
    )
}