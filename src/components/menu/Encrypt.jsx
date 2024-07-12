import React from "react";
//SVGs
import paste from '../../assets/SVG/paste.svg'


export default function Encrypt() {
  return (
    <div className="menu_secundario" id="EncryptMenu">
      <h3>Cifrado de documento</h3>
      <hr></hr>
      <ul>
        <li>
          <button>
            <span>Cifrado...</span>
            <img
              src={paste}
              className="sec4_img1VistaPrevia"
              width={28}
            />
          </button>
        </li>
        <li>
          <button>
            <span>Propiedades...</span>
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
