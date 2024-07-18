import React from "react";

import paste from "../assets/SVG/paste.svg";
import traduccion from "../assets/SVG/traduccion.svg"
import tradicional from "../assets/SVG/Tradicional.svg"
import compartirLibro from "../assets/SVG/compartirLibro.svg"
import anterior from "../assets/SVG/anterior.svg"
import eliminarComentario from "../assets/SVG/eliminarComenarios.svg"
import mostrar from "../assets/SVG/mostrar.svg"
import nuevoComentario from "../assets/SVG/nuevoComentario.svg"
import permitirUsarios from "../assets/SVG/permitirUsuarios.svg"
import siguiente from "../assets/SVG/siguiente.svg"

import simplificado from  "../assets/SVG/simplificado.svg"
import bloquearCeldas from  "../assets/SVG/bloquearCeldas.svg"

import corregirOrto from  "../assets/SVG/corregirOrto.svg"
import protegerHoja from  "../assets/SVG/protegerHoja.svg"
import sinonimos from  "../assets/SVG/Sinonimos.svg"
import restablecer from  "../assets/SVG/restablecer.svg"
export default function ReviewTool() {
  return (
    <div className="section6 toolItems">
      <button className="oneToolItem">
        <div>
          <img src={corregirOrto} className="sec4_img1VistaPrevia" width={26} />
          <p>Corregir Ortografia</p>
        </div>
      </button>
      <button className="oneToolItem">
        <div>
          <img src={sinonimos} className="sec4_img1VistaPrevia" width={24} />
          <p>Sinonimos</p>
        </div>
      </button>
      <div className="toolDivider"></div>
      <button className="oneToolItem">
        <div>
          <img src={nuevoComentario} className="sec4_img1VistaPrevia" width={24} />
          <p>Nuevo Comentario</p>
        </div>
      </button>
      <button className="oneToolItem">
        <div>
          <img src={eliminarComentario} className="sec4_img1VistaPrevia" width={24} />
          <p>Eliminar Comentario</p>
        </div>
      </button>
      <div className="grid-items-4">
        {" "}
        <button className="oneToolItem">
          <img src={anterior} className="sec4_img1VistaPrevia" width={16} />
          <span>Anterior</span>
        </button>
        <button className="oneToolItem">
          <img src={restablecer} className="sec4_img1VistaPrevia" width={16} />
          <span>Restablecer</span>
        </button>
        <button className="oneToolItem">
          <img src={siguiente} className="sec4_img1VistaPrevia" width={16} />
          <span>Siguiente</span>
        </button>
        <button className="oneToolItem">
          <img src={mostrar} className="sec4_img1VistaPrevia" width={16} />
          <span>Mostrar</span>
        </button>
      </div>
      <div className="toolDivider"></div>
      <div className="grid-row-2">
        <button className="oneToolItem">
          <img src={bloquearCeldas} className="sec4_img1VistaPrevia" width={16} />
          <span>Bloquear celda</span>
        </button>
        <button className="oneToolItem">
          <img src={permitirUsarios} className="sec4_img1VistaPrevia" width={16} />
          <span>Permitir a los usuarios editar el rango</span>
        </button>
      </div>      <button className="oneToolItem">
        <div>
          <img src={protegerHoja} className="sec4_img1VistaPrevia" width={24} />
          <p>Protejer hoja</p>
        </div>
      </button>
      <button className="oneToolItem">
        <div>
          <img src={paste} className="sec4_img1VistaPrevia" width={24} />
          <p>Protejer Libro</p>
        </div>
      </button>

      <button className="oneToolItem">
        <div>
          <img src={compartirLibro} className="sec4_img1VistaPrevia" width={24} />
          <p>Compartir libro</p>
        </div>
      </button>
      <div className="toolDivider"></div>
      <div className="grid-row-2">
        <button className="oneToolItem">
          <img src={simplificado} className="sec4_img1VistaPrevia" width={16} />
          <span>Simplificado</span>
        </button>
        <button className="oneToolItem">
          <img src={tradicional} className="sec4_img1VistaPrevia" width={16} />
          <span>Tradicional</span>
        </button>
      </div>{" "}
      <button className="oneToolItem">
        <div>
          <img src={traduccion} className="sec4_img1VistaPrevia" width={24} />
          <p>Traduccion</p>
        </div>
      </button>
    </div>
  );
}
