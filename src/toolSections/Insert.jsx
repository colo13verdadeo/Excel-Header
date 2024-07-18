import React from "react";
import tabladinamica from "../assets/SVG/tabladinamica.svg";
import graficodinamico from "../assets/SVG/graficodinamico.svg";
import tabla from "../assets/SVG/tabla.svg";
import imagen from "../assets/SVG/imagen.svg";
import captura from "../assets/SVG/captura.svg";
import formas from "../assets/SVG/formas.svg";
import WordArt from "../assets/SVG/WordArt.svg";
import cuadrodetexto from "../assets/SVG/cuadrodetexto.svg";
import papel from "../assets/SVG/papel.svg";
import Tippy from "@tippyjs/react";
import miniGraficos from "../assets/SVG/miniGraficos.svg";
import graficoOnda from "../assets/SVG/graficoOnda.svg";
import grafico from "../assets/SVG/grafico.svg";
import media from "../assets/SVG/media.svg";

import bibliotecaDeIconos from "../assets/SVG/bibliotecadeiconos.svg"
import graficoCircular from "../assets/SVG/graficoCircular.svg"
import biblioDeGraficos from "../assets/SVG/bibliotecaDeGraficos.svg"
import graficoCirculos from "../assets/SVG/graficoCirculos.svg"
import graficoBarras from "../assets/SVG/graficoBarras.svg"
import graficoMont from "../assets/SVG/graficoMontaña.svg"
import graficoPastel from "../assets/SVG/graficoPastel.svg"
import graficosBarras from "../assets/SVG/graficosBarras.svg"
import graficosMedia from "../assets/SVG/graficosMedia.svg"
import hexagono from "../assets/SVG/hexagono.svg"
import hipervinculo from "../assets/SVG/Hipervinculo.svg"


export default function Insert() {
  return (
    <div className="section2 toolItems">
      <Tippy content = {"Es otra prueba"} delay={100} placement="bottom">
   
        <button className="oneToolItem">
          <div>
            <img
              width={24}
              src={tabladinamica}
              className="sec2_img1TablaDinamica"
            />
            <p className="sec2_span1">
              Tabla<br></br>dinamica
            </p>
          </div>
        </button>
      </Tippy>
      <button className="oneToolItem">
        <div>
          <img
            width={24}
            src={graficodinamico}
            className="sec2_img2GraficoDinamico"
          />
          <p src={papel} className="sec2_span2">
            Grafico<br></br>dinamico
          </p>
        </div>
      </button>
      <button className="oneToolItem">
        <div>
          <img width={24} src={tabla} className="sec2_img3Tabla" />
          <p className="sec2_span3">Tabla</p>
        </div>
      </button>
      <div className="toolDivider"></div>
      <button className="oneToolItem">
        <div>
          <img width={24} src={imagen} className="sec2_img4Imagen" />
          <p className="sec2_span4">Imagen</p>
        </div>
      </button>


      <button className="oneToolItem">
        <div>
          <img width={24} src={captura} className="sec2_img5Captura" />
          <p className="sec2_span5">Imagenes de Unsplash</p>
        </div>
      </button>
      <button className="oneToolItem">
        <div>
          <img width={24} src={formas} />
          <p className="sec2_span6">Captura</p>
        </div>
      </button>
      <button className="oneToolItem">
        <div>
          <img width={24} src={bibliotecaDeIconos} className="sec2_img5Captura" />
          <p className="sec2_span5">Bibloteca de Iconos</p>
        </div>
      </button>
      {/* Desde archivo, Extraer texto */}

      <div className="grid-row-2">
        <button className="oneToolItem">
          <img width={16} src={WordArt} />
          <p className="sec2_span8">WordArt</p>
        </button>
        <button className="oneToolItem">
          <img width={16} src={cuadrodetexto} />
          <p className="sec2_span9">Cuadro de Texto</p>
        </button>
      </div>
      <div className="toolDivider"></div>
      <button className="oneToolItem">
        <div>
          <img width={24} src={grafico} className="sec2_img5Captura" />
          <p className="sec2_span5">Gráfico</p>
        </div>
      </button>
      <button className="oneToolItem">
        <div>
          <img width={24} src={biblioDeGraficos} className="sec2_img5Captura" />
          <p className="sec2_span5">Biblioteca de gráficos</p>
        </div>
      </button>

      <div className="grid-items-10">
        <button className="oneToolItem">
          <img width={16} src={graficoBarras} className="sec2_img5Captura" />
        </button>
        <button className="oneToolItem">
          <img width={16} src={graficosBarras} className="sec2_img5Captura" />
        </button>
        <button className="oneToolItem">
          <img width={16} src={graficosMedia} className="sec2_img5Captura" />
        </button>
        <button className="oneToolItem">
          <img width={16} src={hexagono} className="sec2_img5Captura" />
        </button>
        <button className="oneToolItem">
          <img width={16} src={graficoMont} className="sec2_img5Captura" />
        </button>
        <button className="oneToolItem">
          <img width={16} src={graficoOnda} className="sec2_img5Captura" />
        </button>
        <button className="oneToolItem">
          <img width={16} src={graficoCirculos} className="sec2_img5Captura" />
        </button>
        <button className="oneToolItem">
          <img width={16} src={graficoPastel} className="sec2_img5Captura" />
        </button>
        <button className="oneToolItem">
          <img width={16} src={media} className="sec2_img5Captura" />
        </button>
        <button className="oneToolItem">
          <img width={16} src={graficoCircular} className="sec2_img5Captura" />
        </button>
      </div>
      <div className="toolDivider"></div>
      <button className="oneToolItem">
        <div>
          <img width={24} src={miniGraficos} className="sec2_img5Captura" />
          <p className="sec2_span5">Mini gráficos</p>
        </div>
      </button>
      <div className="toolDivider"></div>

      <button className="oneToolItem">
        <div>
          <img width={24} src={hipervinculo} className="sec2_img5Captura" />
          <p className="sec2_span5">Hipervinculo</p>
        </div>
      </button>
      <div className="toolDivide"></div>
      <button className="oneToolItem">
        <div>
          <img width={24} src={captura} className="sec2_img5Captura" />
          <p className="sec2_span5">Ecuación
          </p>
        </div>
      </button>
      <button className="oneToolItem">
        <div>
          <img width={24} src={captura} className="sec2_img5Captura" />
          <p className="sec2_span5">Símbolo</p>
        </div>
      </button>      <button className="oneToolItem">
        <div>
          <img width={24} src={captura} className="sec2_img5Captura" />
          <p className="sec2_span5">LaTex</p>
        </div>
      </button>
      <div className="toolDivider"></div>

      <button className="oneToolItem">
        <div>
          <img width={24} src={captura} className="sec2_img5Captura" />
          <p className="sec2_span5">Objeto de fichero</p>
        </div>
      </button>
      <div className="grid-row-2">
        <button className="oneToolItem">
          <img width={16} src={WordArt} />
          <p className="sec2_span8">Formularios</p>
        </button>
        <button className="oneToolItem">
          <img width={16} src={cuadrodetexto} />
          <p className="sec2_span9">Camara</p>
        </button>
      </div>

      {/* Rectangulo de captua de pantalla
      Elipse de captura de pantalla */}
    </div>
  );
}
