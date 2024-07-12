import React from "react";
//SVGs
import paste from '../../assets/SVG/paste.svg'


export default function SecureAndRecovery() {
  return (
    <div className="menu_secundario" id="SecureAndRecovery">
      <h3>Copia de seguridad y recuperacion</h3>
      <hr></hr>
      <ul>
        <li>
          <button>
            <span>Copia de seguridad automatica</span>
            <img
              src={paste}
              className="sec4_img1VistaPrevia"
              width={28}
            />
          </button>
        </li>
        <li>
          <button>
            <span>Reparacion de archivos</span>
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
