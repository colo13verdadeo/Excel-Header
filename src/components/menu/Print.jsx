import React from "react";
//SVGs
import paste from '../../assets/SVG/paste.svg'


export default function Print() {
  return (
    <div className="menu_secundario" id="PrintMenu">
      <h3>Imprimir</h3>
      <hr></hr>
      <ul>
        <li>
          <button>
            <span>Imprimir...</span>
            <img
              src={paste}
              className="sec4_img1VistaPrevia"
              width={28}
            />
          </button>
        </li>
        <li>
          <button>
            <span>Vista previa de impresion...</span>
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
