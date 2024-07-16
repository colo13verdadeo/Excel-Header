import React from "react";

import brocha from "../assets/SVG/brocha.svg";
import paste from "../assets/SVG/paste.svg";
import tigeras from "../assets/SVG/tigeras.svg";
import papel from "../assets/SVG/papel.svg";
import menos from "../assets/SVG/menos.svg";

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

import ordenar from "../assets/SVG/ordenar.svg"
import rellenar from "../assets/SVG/rellenar.svg"
import filas from "../assets/SVG/filas.svg"
import APlus from "../assets/SVG/A+.svg"
import ABalde from "../assets/SVG/Abalde.svg"
import pintura from "../assets/SVG/pintura.svg"
import tresCeros from "../assets/SVG/000,.svg"
import lineaTexto from "../assets/SVG/lineaTexto.svg"
import lineaTexto2 from "../assets/SVG/lineatexto2.svg"
import lineaTexto3 from "../assets/SVG/lineatexto3.svg"
import lineaTexto4 from "../assets/SVG/lineatexto4.svg"
import lineaTexto5 from "../assets/SVG/lineatexto5.svg"
import lineaTexto6 from "../assets/SVG/lineatexto6.svg"
import lineaTexto7 from "../assets/SVG/lineatexxto1.svg"
import lineaAmbos from "../assets/SVG/lineatextoambos.svg"
import lineaBack from "../assets/SVG/lineatextoback.svg"
import lineanext from "../assets/SVG/lineatextonext.svg"
import B from "../assets/SVG/B.svg"
import I from "../assets/SVG/i.svg"
import U from "../assets/SVG/u.svg"
import A from "../assets/SVG/A.svg"
import monedas from "../assets/SVG/moneda.svg"
import wrapText from "../assets/SVG/ajustartexto.svg"
import combinaryCentrar from "../assets/SVG/combinaryCentrar.svg"
import porcentaje from "../assets/SVG/porcentaje.svg"
import cajaDeErramientas from "../assets/SVG/cajaDeHerramientas.svg"
import punto00 from "../assets/SVG/.00.svg"
import trat00 from "../assets/SVG/_-.0.svg"
import formatoCondicional from "../assets/SVG/formatocondicional.svg"



export default function Home() {
  return (
    <div className="section1 toolItems">
      <button className="oneToolItem">
        <div>
          <img width={24} src={brocha} title="Copiar Nodo"/>
          <p className="sec_span1Copiar">
            Copiar<br></br>Nodo
          </p>
        </div>
      </button>
      <button className="oneToolItem">
        <div>
          <img width={24} src={paste} title="Pegar nodo"/>
          {/* Desplegale */}
          <p className="sec_span2Copiar">
            Pegar<br></br> Formato
          </p>
        </div>
      </button>
      <div className="toolDivider"></div>
      <div className="grid-row-2">
        <button className="oneToolItem">
          <img
            src={tigeras}
            title="Cortar"
            className="sec_img3Copiar"
            width={16}
          />
        </button>

        <button className="oneToolItem">
          <img
            src={papel}
            title="Copiar"
            className="sec1_img4Copiar"
            width={16}
          />
        </button>
      </div>
      <div className="grid-items-16">
        <select className="selectFuente">
          <option value="Arial">Arial</option>
          <option value="Calibri">Calibri</option>
          <option value="CalibriLight">Calibri Light</option>
        </select>
        <select className="selectSize">
          <option value="5">5</option>
          <option value="5.5">5.5</option>
          <option value="6">6</option>
        </select>

        <button className="oneToolItem">
          <img src={APlus} className="S1ImgMas" width={16}/>
        </button>

   
 
        <button className="oneToolItem">
          <img src={menos} className="S1ImgMenos" width={16}/>
        </button>
        <button className="oneToolItem">
          <img src={B} className="S1ImgMenos" width={16}/>
        </button>
        <button className="oneToolItem">
          <img src={I} className="S1ImgMenos" width={16}/>
        </button>
        <button className="oneToolItem">
          <img src={U} className="S1ImgMenos" width={16}/>
        </button>
        <button className="oneToolItem">
          <img src={A} className="S1ImgMenos" width={16}/>
        </button>
        <button className="oneToolItem">
          <img src={menos} className="S1ImgMenos" width={16}/>
        </button>
        <button className="oneToolItem">
          <img src={ABalde} className="S1ImgMenos" width={16}/>
        </button>
        <button className="oneToolItem">
          <img src={pintura} className="S1ImgMenos" width={16}/>
        </button>
        <button className="oneToolItem">
          <img src={menos} className="S1ImgMenos" width={16}/>
        </button>
      </div>
      <div className="toolDivider"></div>
      <div className="grid-items-10">
        <button className="oneToolItem">
          <img width={16} src={lineaTexto} className="sec2_img5menos"/>
        </button>
        <button className="oneToolItem">
          <img width={16} src={lineaTexto2} className="sec2_img5menos"/>
        </button>

        <button className="oneToolItem">
          <img width={16} src={lineaTexto7} className="sec2_img5menos"/>
        </button>
                <button className="oneToolItem">
          <img width={16} src={lineaBack} className="sec2_img5menos"/>
        </button>
        <button className="oneToolItem">
          <img width={16} src={lineanext} className="sec2_img5menos"/>
        </button>
        <button className="oneToolItem">
          <img width={16} src={lineaTexto3} className="sec2_img5menos"/>
        </button>
        <button className="oneToolItem">
          <img width={16} src={lineaTexto4} className="sec2_img5menos"/>
        </button>
        <button className="oneToolItem">
          <img width={16} src={lineaTexto5} className="sec2_img5menos"/>
        </button>
        <button className="oneToolItem">
          <img width={16} src={lineaTexto6} className="sec2_img5menos"/>
        </button>

    

        <button className="oneToolItem">
          <img width={16} src={lineaAmbos} className="sec2_img5menos"/>
        </button>
      </div>
      <button className="oneToolItem">
        <div>
          <img width={24} src={paste} title="Pegar nodo"/>
          {/* Desplegale */}
          <p className="sec_span2Copiar">
            Orientacion
          </p>
        </div>
      </button>
      <div className="grid-row-2">
        <button className="oneToolItem">
          <img
            src={wrapText}
            title="Copiar"
            className="sec1_img4Copiar"
            width={16}
          />
          <span className="sec_span3Cortar">Ajustar Texto</span>
        </button>
        <button className="oneToolItem">
          <img
            src={combinaryCentrar}
            title="Copiar"
            className="sec1_img4Copiar"
            width={16}
          />
          <span className="sec_span3Cortar">Combinar y Centrar</span>
        </button>
      </div>
      <div className="toolDivider"></div>
      <div className="grid-items-10">
        <select className="selectFormat">
          <option>General</option>
          <option>General</option>
          <option>General</option>
        </select>

        <button className="oneToolItem">
          <img width={16} src={monedas} className="sec2_img5menos"/>
        </button>
        <button className="oneToolItem">
          <img width={16} src={porcentaje} className="sec2_img5menos"/>
        </button>
     
        <button className="oneToolItem">
          <img width={16} src={tresCeros} className="sec2_img5menos"/>
        </button>
        <button className="oneToolItem">
          <img width={16} src={punto00} className="sec2_img5menos"/>
        </button>   <button className="oneToolItem">
          <img width={16} src={trat00} className="sec2_img5menos"/>
        </button>
      </div>
      <div className="toolDivider"></div>
      <div className="grid-row-2">
        <button className="oneToolItem">
          <img
            src={filas}
            title="Copiar"
            className="sec1_img4Copiar"
            width={16}
          />
          <span className="sec_span3Cortar">Filas y Columnas</span>
        </button>
        <button className="oneToolItem">
          <img
            src={papel}
            title="Copiar"
            className="sec1_img4Copiar"
            width={16}
          />
          <span className="sec_span3Cortar">Hoja de calculo</span>
        </button>
      </div>
      <div className="toolDivider"></div>
      <button className="oneToolItem">
        <div>
          <img width={24} src={formatoCondicional} title="Copiar Nodo"/>
          <p className="sec_span1Copiar">
          Formato condicional
          </p>
        </div>
      </button>
      <div className="grid-row-2">
        <button className="oneToolItem">
          <img
            src={papel}
            title="Copiar"
            className="sec1_img4Copiar"
            width={16}
          />
        </button>
        <button className="oneToolItem">
          <img
            src={papel}
            title="Copiar"
            className="sec1_img4Copiar"
            width={16}
          />
        </button>
      </div>
      <div className="toolDivider"></div>
      <div className="grid-items-6">
        <button className="oneToolItem">
          <img width={16} src={rellenar} className="sec4_img4Tamano"/>
          <span>Rellenar</span>
        </button>
        <button className="oneToolItem">
          <img width={16} src={ordenar} className="sec4_img4Tamano"/>
          <span>Ordenar</span>
        </button>
        <button className="oneToolItem">
          <img width={16} src={texto} className="sec4_img4Tamano"/>
          <span>Congelar Paneles</span>
        </button>
        <button className="oneToolItem">
          <img width={16} src={fechayHora} className="sec4_img4Tamano"/>
          <span>Autosuma</span>
        </button>
        <button className="oneToolItem">
          <img
            width={16}
            src={busquedReferencia}
            className="sec4_img6Zoom"
          />
          <span>Autofiltro</span>
        </button>
        <button className="oneToolItem">
          <img
            width={16}
            src={matematicaTrigono}
            className="sec4_img6Zoom"
          />
          <span>Buscar y Reemplazar</span>
        </button>
      </div>
      <div className="toolDivider"></div>
      <button className="oneToolItem">
        <div>
          <img width={24} src={cajaDeErramientas} title="Copiar Nodo"/>
          <p className="sec_span1Copiar">
            Caja de herramientas inteligente
          </p>
        </div>
      </button>
      <div className="toolDivider"></div>
      <button className="oneToolItem">
        <div>
          <img  width={24} src={brocha} title="Copiar Nodo"/>
          <p className="sec_span1Copiar">
            Configuracion
          </p>
        </div>
      </button>
    </div>
  );
}
