import React from "react";
export default function NewWorkBook() {
  return (
    <div className="menu_secundario" id = "newworkbook">
        <h3>New Workbook</h3>
        <hr></hr>
      <ul>
        <li>
          <button>
            <span>New Blank Woekbook</span>
            <img
              src="/svg/paste.svg"
              className="sec4_img1VistaPrevia"
              width={28}
            ></img>
          </button>


        </li>
        <li>
          <button>
            <span>New Excel 2003 Workbook</span>
            <img
              src="/svg/paste.svg"
              className="sec4_img1VistaPrevia"
              width={28}
            ></img>
          </button>


        </li>
        <li>
          <button>
            <span>New From Other Templates...</span>
            <img
              src="/svg/paste.svg"
              className="sec4_img1VistaPrevia"
              width={28}
            ></img>
          </button>


        </li>
        <li>
          <button>
            <span>New From Default Templates...</span>
            <img
              src="/svg/paste.svg"
              className="sec4_img1VistaPrevia"
              width={28}
            ></img>
          </button>


        </li>
      </ul>
    </div>
  );
}
