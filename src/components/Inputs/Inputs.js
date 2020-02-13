import React from "react";

import "./Inputs.scss";
const Inputs = props => {
  return (
    <div className="input-btn-container">
      <input
        placeholder="Insert id here..."
        type="text"
        id="idProducto"
        className="input"
        onChange={e => props.setId(e.target.value)}
      ></input>
      <input
        placeholder="Insert name here..."
        type="text"
        id="nombre"
        className="input"
        onChange={e => props.setTipo(e.target.value)}
      ></input>
      <input
        placeholder="Insert brand here..."
        type="text"
        id="marca"
        className="input"
        onChange={e => props.setMarca(e.target.value)}
      ></input>
      <input
        placeholder="Insert price here..."
        type="text"
        id="precio"
        className="input"
        onChange={e => props.setPrecio(e.target.value)}
      ></input>
      <div className="btn-container">
        <button className="boton" id="add-btn"
          onClick={props.agregar}>
          Agregar
        </button>
       
      </div>
    </div>
  );
};

export default Inputs;
