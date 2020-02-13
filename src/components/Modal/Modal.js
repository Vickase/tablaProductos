import React from "react";

import "./Modal.scss";

import CloseIcon from "./close.svg";

const Modal = ({showModal}) => {
  return (
    <div className={`bg-modal ${showModal ? "show" : ""}`}>
      <section className="modal-container">
        <header className="modal-header">
          <h2 className="modal-title"> Modify product</h2>
          <button id="close-btn">
              <img className="closeicon" src={CloseIcon}></img>
          </button>
        </header>
        <form className="modal-form">
        <label className="modal-label">Id</label>
          <input className="form-input" id="idProducto" type="number" required />  
          <label className="modal-label">Producto</label>
          <input className="form-input" id="producto" type="text" required />
          <label className="modal-label">Marca</label>
          <input className="form-input" id="marca" type="text" required />
          <label className="modal-label">Precio</label>
          <input className="form-input" id="precio" type="number" required />
        </form>

        <footer className="modal-footer">
          <button className="boton cancel-btn">Cancel</button>
          <button className="boton accept-btn celeste" id="save-btn">
            Save
          </button>
        </footer>
      </section>
    </div>
  );
};

export default Modal;
