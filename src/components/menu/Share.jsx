import React from "react";
//SVGs
import paste from '../../assets/SVG/paste.svg'


export default function Share() {
  return (
    <div className="menu_secundario" id="ShareMenu">
      <h3>Compartir</h3>
      <hr></hr>
      <ul>
        <li>
          <button>
            <span>Compartir</span>
            <img
              src={paste}
              className="sec4_img1VistaPrevia"
              width={28}
            />
          </button>
        </li>
        <li>
          <button>
            <span>Compartir como PDF</span>
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
