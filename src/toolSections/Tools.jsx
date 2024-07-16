import React from "react";

import paste from "../assets/SVG/paste.svg";
import cajaDeErramientas from "../assets/SVG/cajaDeHerramientas.svg"
import convertirArchivoEnPDF from "../assets/SVG/convertirArchivoEnPDF.svg"
import exportarPDF from "../assets/SVG/exportarPDF.svg"
import extraerTexto from "../assets/SVG/extraerTexto.svg"
import exportarImagen from "../assets/SVG/exportarImagen.svg"
import dividirHoja from "../assets/SVG/DividirHoja.svg"
import dividirOFusionar from "../assets/SVG/dividirOFusionar.svg"
import copiaDeSeguridad from "../assets/SVG/copiaDeSeguridad.svg"
import reparacionDeArchivos from "../assets/SVG/reparacionDeArchivos.svg"
import combinarHojas from "../assets/SVG/combinarHoja.svg"
import pdfAExcel from "../assets/SVG/pdfAExcel.svg"

export default function Settings() {
  return (
    <div className="section6 toolItems">
      <button className="oneToolItem">
        <div>
          <img src={exportarPDF} className="sec4_img1VistaPrevia" width={24}/>
          <p>Exportar a PDF</p>
        </div>
      </button>
      <button className="oneToolItem">
        <div>
          <img src={exportarImagen} className="sec4_img1VistaPrevia" width={24}/>
          <p>Exportar a imagen</p>
        </div>
      </button>
      <div className="toolDivider"></div>
      <button className="oneToolItem">
        <div>
          <img src={extraerTexto} className="sec4_img1VistaPrevia" width={24}/>
          <p>Extraer texto</p>
        </div>
      </button>
      <button className="oneToolItem">
        <div>
          <img src={convertirArchivoEnPDF} className="sec4_img1VistaPrevia" width={24}/>
          <p>de Imagen a PDF</p>
        </div>
      </button>
      <button className="oneToolItem">
        <div>
          <img src={pdfAExcel} className="sec4_img1VistaPrevia" width={24}/>
          <p>De PDF a Excel</p>
        </div>
      </button>
      <button className="oneToolItem">
        <div>
          <img src={dividirOFusionar} className="sec4_img1VistaPrevia" width={24}/>
          <p>Dividir o Fusionar</p>
        </div>
      </button>
      <div className="toolDivider"></div>
      <button className="oneToolItem">
        <div>
          <img src={dividirHoja} className="sec4_img1VistaPrevia" width={24}/>
          <p>Dividir Hoja</p>
        </div>
      </button>
      <button className="oneToolItem">
        <div>
          <img src={combinarHojas} className="sec4_img1VistaPrevia" width={24}/>
          <p>Unir Hoja</p>
        </div>
      </button>
      <div className="toolDivider"></div>
      <div className="grid-row-2">
        <button className="oneToolItem">
          <img src={copiaDeSeguridad} className="sec4_img1VistaPrevia" width={16}/>
          <span>Copia de Seguridad</span>
        </button>

        <button className="oneToolItem">
          <img src={reparacionDeArchivos} className="sec4_img1VistaPrevia" width={16}/>
          <span>Reparacion de archivos</span>
        </button>

      </div>
      <div className="toolDivider"></div>
      <button className="oneToolItem">
        <div>
          <img src={cajaDeErramientas} className="sec4_img1VistaPrevia" width={24}/>
          <p>Caja de herramientas</p>
        </div>
      </button>
      <button className="oneToolItem">
        <div>
          <img src={paste} className="sec4_img1VistaPrevia" width={24}/>
          <p>Grabador de pantalla</p>
        </div>
      </button>
      <div className="toolDivider"></div>
      <button className="oneToolItem">
        <div>
          <img src={paste} className="sec4_img1VistaPrevia" width={24}/>
          <p>Guardar en documentos en la nube</p>
        </div>
      </button>
      <button className="oneToolItem">
        <div>
          <img src={paste} className="sec4_img1VistaPrevia" width={24}/>
          <p>Recopilar archivos</p>
        </div>
      </button>
      <button className="oneToolItem">
        <div>
          <img src={paste} className="sec4_img1VistaPrevia" width={24}/>
          <p>Escanear al movil</p>
        </div>
      </button>
      <button className="oneToolItem">
        <div>
          <img src={paste} className="sec4_img1VistaPrevia" width={24}/>
          <p>Biblioteca de diseño</p>
        </div>
      </button>
      <div className="toolDivider"></div>
      <button className="oneToolItem">
        <div>
          <img src={paste} className="sec4_img1VistaPrevia" width={24}/>
          <p>Renombrar archivos por lotes</p>
        </div>
      </button>
    </div>
  );
}
