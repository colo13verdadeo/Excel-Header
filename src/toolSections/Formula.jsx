import React from "react";
import insertarFuncion from "../assets/SVG/insertarFuncion.svg";
import autosuma from "../assets/SVG/autosuma.svg";
import recientes from "../assets/SVG/recientes.svg";
import financieras from "../assets/SVG/financieras.svg";
import logicas from "../assets/SVG/logicas.svg";
import texto from "../assets/SVG/texto.svg";
import fechayHora from "../assets/SVG/fechayHora.svg";
import busquedReferencia from "../assets/SVG/busquedReferencia.svg";
import matematicaTrigono from "../assets/SVG/matematicaTrigono.svg";
import masFunciones from "../assets/SVG/masFunciones.svg";
import crear from "../assets/SVG/crear.svg";
import evaluarFormula from "../assets/SVG/evaluarFormula.svg";
import borrarFlechas from "../assets/SVG/borrarFlechas.svg";
import mostrarFormulas from "../assets/SVG/mostrarFormulas.svg";
import mostrarAnteriores from "../assets/SVG/mostrarAnterirores.svg";
import mostrarDependientes from "../assets/SVG/mostrarDependientes.svg";
import comprobacion from "../assets/SVG/comprobacion.svg";
import administradorDeNombres from "../assets/SVG/administradorDeNombres.svg";

export default function Formula() {
  return (
    <div className="secccion4 toolItems">
      <button className="oneToolItem">
        <div>
          <img width={24} src={insertarFuncion} className="sec4_img1IF" />
          <p className="sec4_span1">Insertar Funcion</p>
        </div>
      </button>
      <button className="oneToolItem">
        <div>
          <img width={24} src={autosuma} className="sec4_img2Autosuma" />
          <p className="sec4_span2">Autosuma</p>
        </div>
      </button>
      <button className="oneToolItem">
        <div>
          <img width={24} src={recientes} className="sec4_img3Recientes" />
          <p className="sec4_span3">Recientes</p>
        </div>
      </button>
      <div className="toolDivider"></div>
      <div className="grid-items-6">
        <button className="oneToolItem">
          <img width={16} src={financieras} className="sec4_img4Tamano" />
          <span>Financieras</span>
        </button>
        <button className="oneToolItem">
          <img width={16} src={texto} className="sec4_img4Tamano" />
          <span>Texto</span>
        </button>
        <button className="oneToolItem">
          <img width={16} src={busquedReferencia} className="sec4_img6Zoom" />
          <span>Busqueda y referencia</span>
        </button>
        <button className="oneToolItem">
          <img width={16} src={logicas} className="sec4_img4Tamano" />
          <span>Logicas</span>
        </button>

        <button className="oneToolItem">
          <img width={16} src={fechayHora} className="sec4_img4Tamano" />
          <span>Fecha y Hora</span>
        </button>

        <button className="oneToolItem">
          <img width={16} src={matematicaTrigono} className="sec4_img6Zoom" />
          <span>Matematicas y trigonometricas</span>
        </button>
      </div>

      <button className="oneToolItem">
        <div>
          <img width={24} src={masFunciones} className="sec4_img6Zoom" />
          <p>
            Mas<br></br>funciones
          </p>
        </div>
      </button>
      <div className="toolDivider"></div>
      <button className="oneToolItem">
        <div>
          <img width={24} src={administradorDeNombres} className="sec4_img6Zoom" />
          <p>Administrador de nombres</p>
        </div>
      </button>

      <div className="grid-row-2">
        <button className="oneToolItem">
          <img width={16} src={crear} className="sec4_img6Zoom" />
          <span>Crear</span>
        </button>

        <button className="oneToolItem">
          <img width={16} src={matematicaTrigono} className="sec4_img6Zoom" />
          <span>Pegar</span>
        </button>
      </div>

      <div className="toolDivider"></div>
      <div className="grid-items-6">
        <button className="oneToolItem">
          <img width={16} src={mostrarAnteriores} className="sec4_img4Tamano" />
          <span>Mostrar Anteriores</span>
        </button>
        <button className="oneToolItem">
          <img width={16} src={mostrarFormulas} className="sec4_img4Tamano" />
          <span>Mostrar formulas</span>
        </button>
        <button className="oneToolItem">
          <img width={16} src={evaluarFormula} className="sec4_img4Tamano" />
          <span>Evaluar formulas</span>
        </button>
        <button className="oneToolItem">
          <img
            width={16}
            src={mostrarDependientes}
            className="sec4_img4Tamano"
          />
          <span>Mostrar Dependientes</span>
        </button>
        <button className="oneToolItem">
          <img width={16} src={borrarFlechas} className="sec4_img6Zoom" />
          <span>Remover flechas</span>
        </button>
        <button className="oneToolItem">
          <img width={16} src={comprobacion} className="sec4_img6Zoom" />
          <span>Comprobación de errores</span>
        </button>
      </div>

      <div className="toolDivider"></div>
      <button className="oneToolItem">
        <div>
          <img width={24} src={masFunciones} className="sec4_img6Zoom" />
          <p>Opción de cálculo</p>
        </div>
      </button>
      <div className="grid-row-2">
        <button className="oneToolItem">
          <img width={16} src={matematicaTrigono} className="sec4_img6Zoom" />
          <span>Recalcular libro de trabajo</span>
        </button>

        <button className="oneToolItem">
          <img width={16} src={matematicaTrigono} className="sec4_img6Zoom" />
          <span>Calcular hoja</span>
        </button>
      </div>
    </div>
  );
}
