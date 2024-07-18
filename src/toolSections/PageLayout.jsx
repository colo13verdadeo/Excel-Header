import React from "react";

import vistaPreviaImpresion from "../assets/SVG/vistaPreviaImpresion.svg";
import Margenes from "../assets/SVG/Margenes.svg";
import orientacion from "../assets/SVG/orientacion.svg";
import tamaño from "../assets/SVG/tamaño.svg";
import areaDeImpresion from "../assets/SVG/areaDeImpresion.svg";
import zoomDePagina from "../assets/SVG/zoomDePagina.svg";
import titulosDeimpresion from "../assets/SVG/titulosDeimpresion.svg";
import imprimirEncabezado from "../assets/SVG/imprimirEncabezado.svg";
import paste from "../assets/SVG/paste.svg";
import fondo from "../assets/SVG/fondo.svg";
import temas from "../assets/SVG/tema.svg";
import insertarSaltos from "../assets/SVG/insertarSaltos.svg";

export default function PageLayout() {
  return (
    <div className="section3 toolItems">
      <button className="oneToolItem">
        <div>
          <img width={24} src={vistaPreviaImpresion}/>
          <p>Vista previa de impresión</p>
        </div>
      </button>

      <button className="oneToolItem">
        <div>
          <img width={24} src={Margenes} className="sec3_img2Margenes"/>
          <p className="sec3_p2">Margenes</p>
        </div>
      </button>

      <button className="oneToolItem">
        <div>
          <img
            width={24}
            src={orientacion}
            className="sec3_img3Orientacion"
          />
          <p className="sec3_p3">Orientacion</p>
        </div>
      </button>
      <button className="oneToolItem">
        <div>
          <img width={24} src={tamaño} className="sec3_img4Tam"/>
          <p className="sec3_p4">Tamaño</p>
        </div>
      </button>
      <button className="oneToolItem">
        <div>
          <img
            width={24}
            src={areaDeImpresion}
            className="sec3_img5AreaImp"
          />
          <p className="sec3_p5">Area de Impresión</p>
        </div>
      </button>

      <button className="oneToolItem">
        <div>
          <img
            width={24}
            src={zoomDePagina}
            className="sec3_img6ZoomPage"
          />
          <p className="sec3_p6">
            Zoom de <br></br>página
          </p>
        </div>
      </button>




      <div className="grid-items-4">
        <button className="oneToolItem">
          <img src={titulosDeimpresion} className="sec4_img1VistaPrevia" width={16}/>
          <span>Titulos de impresion</span>
        </button>
  
        <button className="oneToolItem">
        <input type="checkbox"></input>

          <span> Imprimir encabezado y pie de página</span>
        </button>
        <button className="oneToolItem">
          <img src={imprimirEncabezado} className="sec4_img1VistaPrevia" width={16}/>
          <span>Imprimir líneas de cuadrícula
          </span>
        </button>
        <button className="oneToolItem">
         <input type="checkbox" /> <span>imprimir encabezados</span>
        </button>
      </div>
      <div className="toolDivider"></div>

      <button className="oneToolItem">
        <div className="sec3_div2">
          <img width={24} src={imprimirEncabezado}/>
          <p>Vista previa de saltos de pagina</p>
        </div>
      </button>
      <div className="grid-row-2">
        <button className="oneToolItem">
          <input type="checkbox" name="" id="" />
          <span>Ver saltos de paginas</span>
        </button>
        <button className="oneToolItem">
          <img src={insertarSaltos} className="sec4_img1VistaPrevia" width={16}/>
          <span>Insertar salto de pagina</span>
        </button>
      </div>

      <div className="toolDivider"></div>

      <button className="oneToolItem">
        <div className="sec3_div2">
          <img width={24} src={temas}/>
          <p>Temas</p>
        </div>
      </button>

      <button className="oneToolItem">
        <div className="sec3_div2">
          <img width={24} src={fondo}/>
          <p>Fondos</p>
        </div>
      </button>

      <div className="toolDivider"></div>
      <button className="oneToolItem">
        <div className="sec3_div2">
          <img width={24} src={imprimirEncabezado}/>
          <p>Configuracion</p>
        </div>
      </button>
    </div>
  );
}
