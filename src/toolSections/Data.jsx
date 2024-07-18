import React from "react";
import autosuma from "../assets/SVG/autosuma.svg";
import financieras from "../assets/SVG/financieras.svg";



import insertarListaDesplegable from "../assets/SVG/insertarListaDesplegable.svg"
import autoFiltro from "../assets/SVG/autofiltro.svg"
import consolidar from "../assets/SVG/consolidar.svg"
import desagrupar from "../assets/SVG/desagrupar.svg"
import mostrarTodo from "../assets/SVG/mostrarTodo.svg"
import subtotal from "../assets/SVG/subtotal.svg"
import tablaDinamica from "../assets/SVG/tabladinamica.svg"
import resaltarDuplicados from "../assets/SVG/resaltarDuplicados.svg"
import agrupar from "../assets/SVG/agrupar.svg"
import administrarDuplicados from "../assets/SVG/administrarDuplicados.svg"
import textosColumnas from "../assets/SVG/textosEnColumnas.svg"
import validacion from "../assets/SVG/validacion.svg"
import volverAplicar from "../assets/SVG/volverAplicar.svg"
import ordenar from "../assets/SVG/ordenar.svg"
import rellenar from "../assets/SVG/rellenar.svg"

export default function Data() {
  return (
    <div className="sectionData toolItems">
      <button className="oneToolItem">
        <div>
          <img width={24} src={tablaDinamica} className="sec4_img1IF" />
          <p className="sec4_span1">Tabla dinamica</p>
        </div>
      </button>
      <div className="toolDivider"></div>
      <button className="oneToolItem">
        <div>
          <img width={24} src={autoFiltro} className="sec4_img2Autosuma" />
          <p className="sec4_span2">Autofiltro</p>
        </div>
      </button>
      <div className="grid-row-2">
        <button className="oneToolItem">
          <img width={16} src={mostrarTodo} className="sec4_img4Tamano" />
          <span>Mostar todos</span>
        </button>
        <button className="oneToolItem">
          <img width={16} src={volverAplicar} className="sec4_img4Tamano" />
          <span>Volver Aplicar</span>
        </button>
      </div>

      <button className="oneToolItem">
        <div>
          <img width={24} src={ordenar} className="sec4_img2Autosuma" />
          <p className="sec4_span2">Ordenar</p>
        </div>
      </button>
      <div className="toolDivider"></div>

      <button className="oneToolItem">
        <div>
          <img width={24} src={resaltarDuplicados} className="sec4_img2Autosuma" />
          <p className="sec4_span2">Resaltar Duplicados</p>
        </div>
      </button>

      <button className="oneToolItem">
        <div>
          <img width={24} src={administrarDuplicados} className="sec4_img2Autosuma" />
          <p className="sec4_span2">Administrar Duplicados</p>
        </div>
      </button>

      <button className="oneToolItem">
        <div>
          <img width={24} src={textosColumnas} className="sec4_img2Autosuma" />
          <p className="sec4_span2">Textos en Columnas</p>
        </div>
      </button>

      <button className="oneToolItem">
        <div>
          <img width={24} src={rellenar} className="sec4_img2Autosuma" />
          <p className="sec4_span2">Rellenar</p>
        </div>
      </button>

      <button className="oneToolItem">
        <div>
          <img width={24} src={validacion} className="sec4_img3Recientes" />
          <p className="sec4_span3">Validacion</p>
        </div>
      </button>

      <div className="grid-row-2">
        <button className="oneToolItem">
          <img width={16} src={consolidar} className="sec4_img4Tamano" />
          <span>Consolidar</span>
        </button>
        <button className="oneToolItem">
          <img width={16} src={insertarListaDesplegable} className="sec4_img4Tamano" />
          <span>Insertar lista desplegable</span>
        </button>
      </div>

      <div className="toolDivider"></div>

      <button className="oneToolItem">
        <div>
          <img width={24} src={subtotal} className="sec4_img2Autosuma" />
          <p className="sec4_span2">subtotal</p>
        </div>
      </button>

      <div className="grid-items-4">
        <button className="oneToolItem">
          <img width={16} src={agrupar} className="sec4_img4Tamano" />
          <span>Agrupar</span>
        </button>
        <button className="oneToolItem">
          <img width={16} src={financieras} className="sec4_img4Tamano" />
          <span>Mostrar Detalles</span>
        </button>
        <button className="oneToolItem">
          <img width={16} src={desagrupar} className="sec4_img4Tamano" />
          <span>Desagrupar</span>
        </button>
        <button className="oneToolItem">
          <img width={16} src={financieras} className="sec4_img4Tamano" />
          <span>Esconder Detalle</span>
        </button>
      </div>

      <div className="toolDivider"></div>

      <button className="oneToolItem">
        <div>
          <img width={24} src={autosuma} className="sec4_img2Autosuma" />
          <p className="sec4_span2">Importar datos</p>
        </div>
      </button>
      <div className="grid-row-2">
        <button className="oneToolItem">
          <img width={24} src={autosuma} className="sec4_img2Autosuma" />
          <p className="sec4_span2">Editar links</p>
        </button>
        <button className="oneToolItem">
          <img width={24} src={autosuma} className="sec4_img2Autosuma" />
          <p className="sec4_span2">Refrescar todo</p>
        </button>
      </div>

      <div className="toolDivider"></div>

      <div className="grid-row-2">
        <button className="oneToolItem">
          <img width={24} src={autosuma} className="sec4_img2Autosuma" />
          <p className="sec4_span2">What if analysis</p>
        </button>
      </div>
      <div className="toolDivider"></div>

      <button className="oneToolItem">
        <div>
          <img width={24} src={autosuma} className="sec4_img2Autosuma" />
          <p className="sec4_span2">Configuracion</p>
        </div>
      </button>

    </div>
  );
}
