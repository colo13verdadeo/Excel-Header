import React from "react";
//SVGs
import paste from '../../assets/SVG/paste.svg'


export default function SaveAs() {
  return (
    <div className="menu_secundario" id="save_as">
      <h3>Guardar una copia del documento</h3>
      <hr></hr>
      <ul>
        <li>
          <button>
            <span>Archivo de WPS Speadsheets</span>
            <img
              src={paste}
              className="sec4_img1VistaPrevia"
              width={28}
            />
          </button>
        </li>
        <li>
          <button>
            <span>Plantilla de WPS Speadsheets</span>
            <img
              src={paste}
              className="sec4_img1VistaPrevia"
              width={28}
            />
          </button>
        </li>
        <li>
          <button>
            <span>Archivos de Microsoft Excel 97-2003</span>
            <img
              src={paste}
              className="sec4_img1VistaPrevia"
              width={28}
            />
          </button>
        </li>
        <li>
          <button>
            <span>Plantilla de Microsoft Excel 97-2003</span>
            <img
              src={paste}
              className="sec4_img1VistaPrevia"
              width={28}
            />
          </button>
        </li>
        <li>
          <button>
            <span>Archivo de Microsoft Excel</span>
            <img
              src={paste}
              className="sec4_img1VistaPrevia"
              width={28}
            />
          </button>
        </li>
        <li>
          <button>
            <span>Otros formatos</span>
            <img
              src={paste}
              className="sec4_img1VistaPrevia"
              width={28}
            />
          </button>
        </li>
      </ul>
    </div>
  );
}
