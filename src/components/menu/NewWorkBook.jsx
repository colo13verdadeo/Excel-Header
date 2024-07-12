import React from "react";

//SVGs
import paste from "../../assets/SVG/paste.svg"

export default function NewWorkBook() {
  return (
    <div className="menu_secundario" id = "newworkbook">
        <h3>Nuevo libro</h3>
        <hr/>
      <ul>
        <li>
          <button>
            <span>Nuevo libro de trabajo en blanco</span>
            <img
              src={paste}
              className="sec4_img1VistaPrevia"
              width={28}
            />
          </button>


        </li>
        <li>
          <button>
            <span>Nuevo libro de excel 2003</span>
            <img
              src={paste}
              className="sec4_img1VistaPrevia"
              width={28}
            />
          </button>


        </li>
        <li>
          <button>
            <span>Nuevo desde otra plantilla</span>
            <img
              src={paste}
              className="sec4_img1VistaPrevia"
              width={28}
            />
          </button>


        </li>
        <li>
          <button>
            <span>Nuevo desde otra plantilla predeterminada...</span>
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
