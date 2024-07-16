import React from "react";
import masFunciones from "../assets/SVG/masFunciones.svg";
import paste from "../assets/SVG/paste.svg";
import normal from "../assets/SVG/normal.svg";
import pantallaCompleta from "../assets/SVG/pantallaCompleta.svg"
import zoom from "../assets/SVG/zoom.svg"
import disDeLectura from "../assets/SVG/diseñoLectura.svg"
import disDePagina from "../assets/SVG/diseñoPagina.svg"
import dividirVentana from "../assets/SVG/dividirVentana.svg"
import modoDeProteccionDeOjos from "../assets/SVG/modoProteccionDeOjos.svg"
import oneOne from "../assets/SVG/1_1.svg"
import inmovolizarSecciones from "../assets/SVG/inmovilizarSecciones.svg"
import nuevasVentanas from "../assets/SVG/nuevsVentana.svg"
import organizarTodo from "../assets/SVG/organizarTodo.svg"
import vistasPersonalizadas from "../assets/SVG/vistasPersonalizadas.svg"



export default function View() {
  return (
    <div className="section7 toolItems">
      <button className="oneToolItem">
        <div>
          <img width={24} src={normal} className="sec4_img6Zoom"/>
          <p>
           Normal
          </p>
        </div>
      </button>
      <button className="oneToolItem">
        <div>
          <img width={24} src={masFunciones} className="sec4_img6Zoom"/>
          <p>
           Vista Previa de salto de <br></br> Paginas
          </p>
        </div>
      </button>
      <button className="oneToolItem">
        <div>
          <img width={24} src={disDePagina} className="sec4_img6Zoom"/>
          <p>
           Diseño de Pagina
          </p>
        </div>
      </button>
      <div className="grid-items-4">
        <button className="oneToolItem">
          <img src={modoDeProteccionDeOjos} className="sec4_img1VistaPrevia" width={16}/>
          <span>Modo de proteccion ocular</span>
        </button>
        <button className="oneToolItem">
          <img src={disDeLectura} className="sec4_img1VistaPrevia" width={16}/>
          <span>Diseño de lectura</span>
        </button>
        <button className="oneToolItem">
          <img src={pantallaCompleta} className="sec4_img1VistaPrevia" width={16}/>
          <span>Pantalla completa</span>
        </button>
        <button className="oneToolItem">
          <img src={vistasPersonalizadas} className="sec4_img1VistaPrevia" width={16}/>
          <span>Vistas personalizadas</span>
        </button>
      </div>
      <div className="toolDivider"></div>
      <div className="grid-items-4">
        <div className="oneToolItem">
          <input type="checkbox"></input>
          <span>Barra de formulas</span>
        </div>
        <div className="oneToolItem">
          <input type="checkbox"></input>
          <span>Encabezados</span>
        </div>
        <div className="oneToolItem">
          <input type="checkbox"></input>
          <span>Lineas de caudricula</span>
        </div>
        <div className="oneToolItem">
          <input type="checkbox"></input>
          <span>Ventana de tareas</span>
        </div>
      </div>
      <div className="toolDivider"></div>
      <button className="oneToolItem">
        <div>
          <img width={24} src={zoom} className="sec4_img6Zoom"/>
          <p>Zoom in</p>
        </div>
      </button>
      <button className="oneToolItem">
        <div>
          <img width={24} src={oneOne} className="sec4_img6Zoom"/>
          <p>100%</p>
        </div>
      </button>
      <div className="toolDivider"></div>
      <button className="oneToolItem">
        <div>
          <img width={24} src={inmovolizarSecciones} className="sec4_img6Zoom"/>
          <p>Inmovilizar Secciones</p>
        </div>
      </button>
      <button className="oneToolItem">
        <div>
          <img width={24} src={organizarTodo} className="sec4_img6Zoom"/>
          <p>Organizar todo</p>
        </div>
      </button>
      <div className="grid-row-2">
        <button className="oneToolItem">
          <img width={16} src={dividirVentana} className="sec4_img6Zoom"/>
          <span>Dividir ventana</span>
        </button>
        <button className="oneToolItem">
          <img width={16} src={nuevasVentanas} className="sec4_img6Zoom"/>
          <span>Nuevas ventana</span>
        </button>
      </div>
      <button className="oneToolItem">
        <div>
          <img width={24} src={masFunciones} className="sec4_img6Zoom"/>
          <p>Ver lado a lado</p>
        </div>
      </button>
      <div className="grid-row-2">
        <button className="oneToolItem">
          <img width={16} src={masFunciones} className="sec4_img6Zoom"/>
          <span>Desplazamiento sincronizado</span>
        </button>
        <button className="oneToolItem">
          <img width={16} src={masFunciones} className="sec4_img6Zoom"/>
          <span>Restablecer posicion</span>
        </button>
      </div>
    </div>
  );
}
